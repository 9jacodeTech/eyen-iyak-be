import { SUPPORT_OFFER_FILE_ENV } from 'config';
import type { SupportOfferDetail, SupportOfferDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ISupportOfferDataGateway } from 'usecases';

const fileName = SUPPORT_OFFER_FILE_ENV;

export class SupportOfferDataGateway implements ISupportOfferDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<SupportOfferDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Support Offers', error);
      return [];
    }
  }

  async create(data: SupportOfferDetailInput): Promise<SupportOfferDetail> {
    const currentOffer = await this.fetch();

    const newOffer = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentOffer.push(newOffer);

    const offerDataString = JSON.stringify(currentOffer);
    await this.fileService.write(fileName, offerDataString);

    return newOffer;
  }
}
