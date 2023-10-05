import { HERO_SECTION_FILE_ENV } from 'config';
import { type HeroSectionDetail, type HeroSectionDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IHeroSectionDataGateway } from 'usecases';
import { HeroNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class HeroSectionDataGateway implements IHeroSectionDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<HeroSectionDetail[]> {
    const fileName = HERO_SECTION_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Hero Section', error);
      return [];
    }
  }

  async create(data: HeroSectionDetailInput): Promise<HeroSectionDetail> {
    const fileName = HERO_SECTION_FILE_ENV;

    const currentHeroes = await this.fetch();

    const newHero = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentHeroes.push(newHero);
    const heroDataString = JSON.stringify(currentHeroes);
    await this.fileService.write(fileName, heroDataString);

    return newHero;
  }

  async update(
    id: string,
    data: HeroSectionDetailInput
  ): Promise<HeroSectionDetail> {
    const fileName = HERO_SECTION_FILE_ENV;

    const currentHeroes = await this.fetch();

    const indexToUpdate = currentHeroes.findIndex(
      (currentHero) => currentHero.id === id
    );

    if (indexToUpdate < 0) {
      throw new HeroNotFound();
    }

    const heroUpdateData = {
      ...currentHeroes[indexToUpdate],
      ...data,
    };
    heroUpdateData.updatedAt = new Date();

    currentHeroes[indexToUpdate] = heroUpdateData;

    const heroDataString = JSON.stringify(currentHeroes);
    await this.fileService.write(fileName, heroDataString);

    return heroUpdateData;
  }

  async delete(id: string): Promise<any> {
    const fileName = HERO_SECTION_FILE_ENV;

    const currentHeroes = await this.fetch();

    const indexToDelete = currentHeroes.findIndex(
      (currentHero) => currentHero.id === id
    );

    if (indexToDelete < 0) {
      throw new HeroNotFound();
    }

    currentHeroes.splice(indexToDelete, 1);

    const heroDataString = JSON.stringify(currentHeroes);
    await this.fileService.write(fileName, heroDataString);

    return currentHeroes;
  }
}
