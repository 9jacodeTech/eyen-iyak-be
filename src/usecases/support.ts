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

    const currentSupport = await this.fetch();

    const supportIndex = currentSupport.findIndex(
      (support) => support.name === data.name
    );

    if (supportIndex < 0) {
      return await this.dataGateway.create(supportData);
    } else {
      return null;
    }
  }

  async update(idToUpdate: string, data: SupportDetailInput) {
    const supportData = validateData(supportSchema, data);

    const currentSupport = await this.fetch();

    const supportIndex = currentSupport.findIndex(
      (support) => support.name === data.name
    );

    if (supportIndex < 0) {
      return await this.dataGateway.update(idToUpdate, supportData);
    } else {
      return null;
    }
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
