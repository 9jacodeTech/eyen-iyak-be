import type { BrandStoryDetailInput } from 'entities';
import type { IBrandStoryDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { brandStorySchema } from 'schemas/brandStory';

export class BrandStoryUseCase {
  constructor(private readonly dataGateway: IBrandStoryDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: BrandStoryDetailInput) {
    const brandStoryData = validateData(brandStorySchema, data);
    return await this.dataGateway.create(brandStoryData);
  }
}
