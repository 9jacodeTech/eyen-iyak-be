import { TEAM_MEMBER_FILE_ENV } from 'config';
import type { TeamMemberDetailInput, TeamMemberDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ITeamMembersDataGateway } from 'usecases';
import { TeamMemberNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = TEAM_MEMBER_FILE_ENV;

export class TeamMembersDataGateway implements ITeamMembersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<TeamMemberDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Team Members', error);
      return [];
    }
  }

  async create(data: TeamMemberDetailInput): Promise<TeamMemberDetail> {
    const teamMembers = await this.fetch();

    const newTeamMember = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    teamMembers.push(newTeamMember);

    const teamMemberDataString = JSON.stringify(teamMembers);
    await this.fileService.write(fileName, teamMemberDataString);

    return newTeamMember;
  }

  async update(
    id: string,
    data: TeamMemberDetailInput
  ): Promise<TeamMemberDetail> {
    const teamMembers = await this.fetch();

    const indexToUpdate = teamMembers.findIndex(
      (teamMembers) => teamMembers.id === id
    );

    if (indexToUpdate < 0) {
      throw new TeamMemberNotFound();
    }

    const teamMemberUpdateData = {
      ...teamMembers[indexToUpdate],
      ...data,
    };
    teamMemberUpdateData.updatedAt = new Date();
    teamMembers[indexToUpdate] = teamMemberUpdateData;

    const teamMemberDataString = JSON.stringify(teamMembers);
    await this.fileService.write(fileName, teamMemberDataString);

    return teamMemberUpdateData;
  }

  async delete(id: string): Promise<any> {
    const teamMembers = await this.fetch();

    const indexToDelete = teamMembers.findIndex(
      (teamMembers) => teamMembers.id === id
    );

    if (indexToDelete < 0) {
      throw new TeamMemberNotFound();
    }

    teamMembers.splice(indexToDelete, 1);

    const teamMemberDataString = JSON.stringify(teamMembers);
    await this.fileService.write(fileName, teamMemberDataString);

    return teamMembers;
  }
}
