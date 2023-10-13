import { type AboutDetailInput } from 'entities';
import { type IAboutPageDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { aboutPageInputSchema } from 'schemas/aboutPage';

export class AboutPageUsecase {
  constructor(private readonly dataGateway: IAboutPageDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: AboutDetailInput) {
    const aboutPageData = validateData(aboutPageInputSchema, data);

    return await this.dataGateway.create(aboutPageData);
  }

  async update(idToUpdate: string, data: AboutDetailInput) {
    const aboutPageData = validateData(aboutPageInputSchema, data);

    return await this.dataGateway.update(idToUpdate, aboutPageData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
