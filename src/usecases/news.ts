import type { NewsDetailInput } from 'entities';
import type { INewsDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { newsInputSchema } from 'schemas/news';

export class NewsUseCase {
  constructor(private readonly dataGateway: INewsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: NewsDetailInput) {
    const newsData = validateData(newsInputSchema, data);
    return await this.dataGateway.create(newsData);
  }

  async update(idToUpdate: string, data: NewsDetailInput) {
    const newsData = validateData(newsInputSchema, data);
    return await this.dataGateway.update(idToUpdate, newsData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
