import type { TeamMemberDetailInput } from 'entities';
import type { ITeamMembersDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { teamMembersSchema } from 'schemas/teamMembers';

export class TeamMembersUseCase {
  constructor(private readonly dataGateway: ITeamMembersDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: TeamMemberDetailInput) {
    const teamMemberData = validateData(teamMembersSchema, data);
    return await this.dataGateway.create(teamMemberData);
  }

  async update(idToUpdate: string, data: TeamMemberDetailInput) {
    const teamMemberData = validateData(teamMembersSchema, data);
    return await this.dataGateway.update(idToUpdate, teamMemberData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
