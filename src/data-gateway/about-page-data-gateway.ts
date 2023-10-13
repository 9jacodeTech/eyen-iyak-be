import { ABOUT_PAGE_FILE_ENV } from 'config';
import { type AboutDetail, type AboutDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IAboutPageDataGateway } from 'usecases';
import { AboutPageNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = ABOUT_PAGE_FILE_ENV;

export class AboutPageDataGateway implements IAboutPageDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<AboutDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching about page', error);
      return [];
    }
  }

  async create(data: AboutDetailInput): Promise<AboutDetail> {
    const currentAboutPage = await this.fetch();

    const newAboutPage = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentAboutPage.push(newAboutPage);

    const aboutPageDataString = JSON.stringify(currentAboutPage);
    await this.fileService.write(fileName, aboutPageDataString);

    return newAboutPage;
  }

  async update(id: string, data: AboutDetailInput): Promise<AboutDetail> {
    const currentAboutPage = await this.fetch();

    const indexToUpdate = currentAboutPage.findIndex(
      (gallery) => gallery.id === id
    );

    if (indexToUpdate < 0) {
      throw new AboutPageNotFound();
    }

    const update = {
      ...currentAboutPage[indexToUpdate],
      ...data,
    };
    update.updatedAt = new Date();

    currentAboutPage[indexToUpdate] = update;

    const aboutPageDataString = JSON.stringify(currentAboutPage);
    await this.fileService.write(fileName, aboutPageDataString);

    return update;
  }

  async delete(id: string): Promise<any> {
    const currentAboutPage = await this.fetch();

    const indexToDelete = currentAboutPage.findIndex(
      (gallery) => gallery.id === id
    );

    if (indexToDelete < 0) {
      throw new AboutPageNotFound();
    }

    currentAboutPage.splice(indexToDelete, 1);

    const aboutPageDataString = JSON.stringify(currentAboutPage);
    await this.fileService.write(fileName, aboutPageDataString);

    return currentAboutPage;
  }
}
