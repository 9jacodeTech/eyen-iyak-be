import type { HeroSectionDetail, HeroSectionDetailInput } from 'entities';
import { type IHeroSectionDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { heroSectionInputSchema } from 'schemas/heroSection,';

export class HeroSectionUseCase {
  constructor(private readonly datagateway: IHeroSectionDataGateway) {}

  async fetch() {
    const data = await this.datagateway.fetch();
    return data;
  }

  async createOrUpdate(data: HeroSectionDetailInput) {
    const heroSectionData = validateData(heroSectionInputSchema, data);

    const heroSections = await this.datagateway.fetch();

    const currentHero = heroSections.find((hero) => hero.page === data.page);

    let updateValues: HeroSectionDetail;
    if (!currentHero) {
      updateValues = await this.datagateway.create(heroSectionData);
      return data;
    } else {
      updateValues = await this.datagateway.update(
        heroSectionData.page,
        heroSectionData
      );
    }
    return updateValues;
  }

  async update(idToUpdate: string, data: HeroSectionDetailInput) {
    const heroSectionData = validateData(heroSectionInputSchema, data);
    return await this.datagateway.update(idToUpdate, heroSectionData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
