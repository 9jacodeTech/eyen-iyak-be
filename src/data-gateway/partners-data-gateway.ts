import { PARTNERS_FILE_ENV } from 'config';
import type { PartnerDetailInput, PartnerDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IPartnersDataGateway } from 'usecases';
import { PartnerNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = PARTNERS_FILE_ENV;

export class PartnersDataGateway implements IPartnersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<PartnerDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Partners', error);
      return [];
    }
  }

  async create(data: PartnerDetailInput): Promise<PartnerDetail> {
    const currentPartner = await this.fetch();

    const newPartner = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    currentPartner.push(newPartner);

    const partnerDataString = JSON.stringify(currentPartner);
    await this.fileService.write(fileName, partnerDataString);

    return newPartner;
  }

  async update(id: string, data: PartnerDetailInput): Promise<PartnerDetail> {
    const currentPartner = await this.fetch();

    const indexToUpdate = currentPartner.findIndex(
      (currentPartner) => currentPartner.id === id
    );

    if (indexToUpdate < 0) {
      throw new PartnerNotFound();
    }

    const partnerUpdateData = {
      ...currentPartner[indexToUpdate],
      ...data,
    };
    partnerUpdateData.updatedAt = new Date();
    currentPartner[indexToUpdate] = partnerUpdateData;

    const PartnerDataString = JSON.stringify(currentPartner);
    await this.fileService.write(fileName, PartnerDataString);

    return partnerUpdateData;
  }

  async delete(id: string): Promise<any> {
    const currentPartner = await this.fetch();

    const indexToDelete = currentPartner.findIndex(
      (currentPartner) => currentPartner.id === id
    );

    if (indexToDelete < 0) {
      throw new PartnerNotFound();
    }

    currentPartner.splice(indexToDelete, 1);

    const partnerDataString = JSON.stringify(currentPartner);
    await this.fileService.write(fileName, partnerDataString);

    return currentPartner;
  }
}
