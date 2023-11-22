import { type SubProgramDetailInput } from 'entities';
import { type ISubProgramsDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { subProgramsSchema } from 'schemas/subPrograms';

export class SubProgramUsecase {
  constructor(private readonly dataGateway: ISubProgramsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: SubProgramDetailInput) {
    const programData = validateData(subProgramsSchema, data);

    return await this.dataGateway.create(programData);
  }

  async update(idToUpdate: string, data: SubProgramDetailInput) {
    const programData = validateData(subProgramsSchema, data);

    return await this.dataGateway.update(idToUpdate, programData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }

  async fetchById(idToFetch: string) {
    return await this.dataGateway.fetchById(idToFetch);
  }
}
