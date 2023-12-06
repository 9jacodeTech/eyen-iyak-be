import { FOOTER_FILE_ENV } from 'config';
import { type FooterDetail, type FooterDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IFooterDataGateway } from 'usecases';

const fileName = FOOTER_FILE_ENV;

export class FooterDataGateway implements IFooterDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<FooterDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Footer', error);
      return {
        officeAddress: '',
        emailAddress: '',
        phoneNumber: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: FooterDetailInput): Promise<FooterDetail> {
    const currentFooter = await this.fetch();

    const updated = {
      ...currentFooter,
      ...data,
    };
    updated.updatedAt = new Date();

    const footerDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, footerDataString);

    return updated;
  }
}
