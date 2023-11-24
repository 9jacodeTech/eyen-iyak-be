import { SUB_PROGRAM_FILE_ENV } from 'config';
import { type SubProgramDetail, type SubProgramDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ISubProgramsDataGateway } from 'usecases';
import { ProgramNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = SUB_PROGRAM_FILE_ENV;

export class SubProgramsDataGateway implements ISubProgramsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<SubProgramDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Programs', error);
      return [];
    }
  }

  async create(data: SubProgramDetailInput): Promise<SubProgramDetail> {
    const currentProgram = await this.fetch();

    const newProgram = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentProgram.push(newProgram);

    const programDataString = JSON.stringify(currentProgram);
    await this.fileService.write(fileName, programDataString);

    return newProgram;
  }

  async update(
    id: string,
    data: SubProgramDetailInput
  ): Promise<SubProgramDetail> {
    const currentProgram = await this.fetch();

    const indexToUpdate = currentProgram.findIndex(
      (program) => program.id === id
    );

    if (indexToUpdate < 0) {
      throw new ProgramNotFound();
    }
    const update = {
      ...currentProgram[indexToUpdate],
      ...data,
      updatedAt: new Date(),
    };
    currentProgram[indexToUpdate] = update;

    const programDataString = JSON.stringify(currentProgram);
    await this.fileService.write(fileName, programDataString);

    return update;
  }

  async delete(id: string): Promise<any> {
    const currentProgram = await this.fetch();

    const indexToDelete = currentProgram.findIndex(
      (program) => program.id === id
    );

    if (indexToDelete < 0) {
      throw new ProgramNotFound();
    }

    currentProgram.splice(indexToDelete, 1);

    const programDataString = JSON.stringify(currentProgram);
    await this.fileService.write(fileName, programDataString);

    return currentProgram;
  }

  async fetchById(id: string): Promise<SubProgramDetail> {
    const currentProgram = await this.fetch();

    const indexToFetch = currentProgram.findIndex(
      (program) => program.id === id
    );

    if (indexToFetch < 0) {
      throw new ProgramNotFound();
    }

    return currentProgram[indexToFetch];
  }
}
