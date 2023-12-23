import type { SupportDetailInput } from 'entities';
import type { ISupportDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { supportSchema } from 'schemas/support';

export class SupportUseCase {
  constructor(private readonly dataGateway: ISupportDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: SupportDetailInput) {
    const supportData = validateData(supportSchema, data);

    return await this.dataGateway.create(supportData);
  }

  async update(idToUpdate: string, data: SupportDetailInput) {
    const supportData = validateData(supportSchema, data);

    return await this.dataGateway.update(idToUpdate, supportData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
