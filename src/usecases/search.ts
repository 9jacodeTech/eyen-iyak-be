import { type SearchDetailInput, type SearchResultItem } from 'entities';
import {
  type INewsDataGateway,
  type IProgramDataGateway,
  type IProjectDataGateway,
} from './interfaces';
import { validateData } from 'utils/helpers';
import { searchInputSchema } from 'schemas/search';

export class SearchUsecase {
  constructor(
    private readonly newsDataGateway: INewsDataGateway,
    private readonly programsDataGateway: IProgramDataGateway,
    private readonly projectsDatagateway: IProjectDataGateway
  ) {}

  async fetch(data: SearchDetailInput) {
    const searchData = validateData(searchInputSchema, data);

    const values = await Promise.all([
      this.getNews(),
      this.getPrograms(),
      this.getprojects(),
    ]);
    const [news, projects, programs] = values;

    const combined = [...news, ...projects, ...programs];
    const searchResult = combined.filter((item) => {
      for (const key in item) {
        if (
          typeof item[key] === 'string' &&
          item[key].toLowerCase().includes(searchData.searchTerm)
        ) {
          return true;
        }
      }
      return false;
    });

    return searchResult;
  }

  private async getNews(): Promise<SearchResultItem[]> {
    const news = await this.newsDataGateway.fetch();
    return news.map((item) => ({
      id: item.id,
      category: 'news',
      title: item.title,
    }));
  }

  private async getPrograms(): Promise<SearchResultItem[]> {
    const news = await this.programsDataGateway.fetch();
    return news.map((item) => ({
      id: item.id,
      category: 'program',
      title: item.name,
    }));
  }

  private async getprojects(): Promise<SearchResultItem[]> {
    const news = await this.projectsDatagateway.fetch();
    return news.map((item) => ({
      id: item.id,
      category: 'project',
      title: item.name,
    }));
  }
}
