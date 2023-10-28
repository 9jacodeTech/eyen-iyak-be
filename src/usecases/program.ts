import { type ProgramDetailInput } from 'entities';
import { type IProgramDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { programInputSchema } from 'schemas/programs';

export class ProgramUsecase {
  constructor(private readonly dataGateway: IProgramDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async createOrUpdate(data: ProgramDetailInput) {
    const programData = validateData(programInputSchema, data);

    const programs = await this.dataGateway.fetch();

    const currentProgram = programs.find(
      (item) => item.program === programData.program
    );

    if (!currentProgram) {
      return await this.dataGateway.create(programData);
    } else {
      return await this.dataGateway.update(programData.program, programData);
    }
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }

  async fetchById(idToFetch: string) {
    return await this.dataGateway.fetchById(idToFetch);
  }
}
