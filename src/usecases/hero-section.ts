import { type HeroSectionDetailInput } from 'entities';
import { type IHeroSectionDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { heroSectionInputSchema } from 'schemas/heroSection,';

export class HeroSectionUseCase {
  constructor(private readonly datagateway: IHeroSectionDataGateway) {}

  async fetch() {
    const data = await this.datagateway.fetch();
    return data;
  }

  async create(data: HeroSectionDetailInput) {
    const heroSectionData = validateData(heroSectionInputSchema, data);
    return await this.datagateway.create(heroSectionData);
  }

  async update(idToUpdate: string, data: HeroSectionDetailInput) {
    const heroSectionData = validateData(heroSectionInputSchema, data);
    return await this.datagateway.update(idToUpdate, heroSectionData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
