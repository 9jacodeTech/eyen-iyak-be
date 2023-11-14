import type { AboutContentInput } from 'entities';
import type { IAboutContentDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { aboutContentSchema } from 'schemas/aboutContent';

export class AboutContentUseCase {
  constructor(private readonly dataGateway: IAboutContentDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: AboutContentInput) {
    const aboutContentData = validateData(aboutContentSchema, data);
    return await this.dataGateway.create(aboutContentData);
  }
}
