import { NEWS_FILE_ENV } from 'config';
import type { NewsDetailInput, NewsDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type INewsDataGateway } from 'usecases';
import { NewsNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class NewsDataGateway implements INewsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<NewsDetail[]> {
    try {
      const fileName = NEWS_FILE_ENV;

      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching News', error);
      return [];
    }
  }

  async create(data: NewsDetailInput): Promise<NewsDetail> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const newNews = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    currentNews.push(newNews);

    const newsDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newsDataString);

    return newNews;
  }

  async update(id: string, data: NewsDetailInput): Promise<NewsDetail> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const indexToUpdate = currentNews.findIndex(
      (currentNews) => currentNews.id === id
    );

    if (indexToUpdate < 0) {
      throw new NewsNotFound();
    }

    const newsUpdateData = {
      ...currentNews[indexToUpdate],
      ...data,
    };
    newsUpdateData.updatedAt = new Date();
    currentNews[indexToUpdate] = newsUpdateData;

    const newsDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newsDataString);

    return newsUpdateData;
  }

  async delete(id: string): Promise<any> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const indexToDelete = currentNews.findIndex(
      (currentNews) => currentNews.id === id
    );

    if (indexToDelete < 0) {
      throw new NewsNotFound();
    }

    currentNews.splice(indexToDelete, 1);

    const newsDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newsDataString);

    return currentNews;
  }
}
