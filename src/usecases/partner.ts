import type { PartnerDetailInput } from 'entities';
import type { IPartnersDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { partnerSchema } from 'schemas/partners';

export class PartnersUseCase {
  constructor(private readonly dataGateway: IPartnersDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: PartnerDetailInput) {
    const partnerData = validateData(partnerSchema, data);
    return await this.dataGateway.create(partnerData);
  }

  async update(idToUpdate: string, data: PartnerDetailInput) {
    const partnerData = validateData(partnerSchema, data);
    return await this.dataGateway.update(idToUpdate, partnerData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
