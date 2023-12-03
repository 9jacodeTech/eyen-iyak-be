import { SUPPORT_FILE_ENV } from 'config';
import type { SupportDetailInput, SupportDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ISupportDataGateway } from 'usecases';
import { SupportNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = SUPPORT_FILE_ENV;

export class SupportDataGateway implements ISupportDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<SupportDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Support', error);
      return [];
    }
  }

  async create(data: SupportDetailInput): Promise<SupportDetail> {
    const support = await this.fetch();

    const newSupport = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    support.push(newSupport);

    const supportDataString = JSON.stringify(support);
    await this.fileService.write(fileName, supportDataString);

    return newSupport;
  }

  async update(id: string, data: SupportDetailInput): Promise<SupportDetail> {
    const support = await this.fetch();

    const indexToUpdate = support.findIndex((support) => support.id === id);

    if (indexToUpdate < 0) {
      throw new SupportNotFound();
    }

    const supportUpdateData = {
      ...support[indexToUpdate],
      ...data,
      updatedAt: new Date(),
    };

    support[indexToUpdate] = supportUpdateData;

    const supportDataString = JSON.stringify(support);
    await this.fileService.write(fileName, supportDataString);

    return supportUpdateData;
  }

  async delete(id: string): Promise<any> {
    const support = await this.fetch();

    const indexToDelete = support.findIndex((support) => support.id === id);

    if (indexToDelete < 0) {
      throw new SupportNotFound();
    }

    support.splice(indexToDelete, 1);

    const supportDataString = JSON.stringify(support);
    await this.fileService.write(fileName, supportDataString);

    return support;
  }
}
