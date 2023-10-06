import { PROJECT_FILE_ENV } from 'config';
import { type ProjectDetailInput, type ProjectDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type  IProjectDataGateway } from 'usecases';
import { v4 as uuidv4 } from 'uuid';

const fileName = PROJECT_FILE_ENV;

export class ProjectDataGateway implements IProjectDataGateway {
  constructor(private readonly fileservice: IFileService) {}

  async fetch(): Promise<ProjectDetail[]> {
    try {
      const fileContent = await this.fileservice.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Project', error);
      return [];
    }
  }

  async create(data: ProjectDetailInput): Promise<ProjectDetail> {
    const currentProject = await this.fetch();

    const newProject = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentProject.push(newProject);

    const projectDataString = JSON.stringify(currentProject);
    await this.fileservice.write(fileName, projectDataString);

    return newProject;
  }

  async update(id: string, data: ProjectDetailInput): Promise<ProjectDetail> {
    const currentProject = await this.fetch();

    const indexToUpdate = currentProject.findIndex(
      (project) => project.id === id
    );

    const updateProject = {
      ...currentProject[indexToUpdate],
      ...data,
    };

    updateProject.updatedAt = new Date();
    currentProject[indexToUpdate] = updateProject;

    const projectDataString = JSON.stringify(currentProject);
    await this.fileservice.write(fileName, projectDataString);

    return updateProject;
  }

  async delete(id: string): Promise<any> {
    const currentProject = await this.fetch();

    const indexToDelete = currentProject.findIndex(
      (project) => project.id === id
    );

    currentProject.splice(indexToDelete, 1);

    const projectDataString = JSON.stringify(currentProject);
    await this.fileservice.write(fileName, projectDataString);

    return currentProject;
  }
}
