import { BRAND_STORY_FILE_ENV } from 'config';
import { type BrandStoryDetail, type BrandStoryDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IBrandStoryDataGateway } from 'usecases';

const fileName = BRAND_STORY_FILE_ENV;

export class BrandStoryDataGateway implements IBrandStoryDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<BrandStoryDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Brand Story', error);
      return {
        title: 'Brand Story and Personality',
        subTitle: 'Eyen-Iyak is the Ibibio word for fisheye',
        content:
          'I was having a conversation with an elderly friend and she asked me a simple question- have you ever seen a fish’s eye closed in life and in death? She told me that the fish’s eye never shuts because it sees all even when it dies',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async create(data: BrandStoryDetailInput): Promise<BrandStoryDetail> {
    const currentStory = await this.fetch();

    const newStory = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const storyDataString = JSON.stringify(currentStory);
    await this.fileService.write(fileName, storyDataString);

    return newStory;
  }
}
