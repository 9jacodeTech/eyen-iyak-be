import { type ProgramDetailInput } from 'entities';
import { IProgramDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { programInputSchema } from 'schemas/programs';

export class ProgramUsecase {
  constructor(private readonly dataGateway: IProgramDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: ProgramDetailInput) {
    const programData = validateData(programInputSchema, data);

    return await this.dataGateway.create(programData);
  }

  async update(idToUpdate: string, data: ProgramDetailInput) {
    const programData = validateData(programInputSchema, data);

    return await this.dataGateway.update(idToUpdate, data);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
