import { GALLERY_FILE_ENV } from 'config';
import { type GalleryDetail, type GalleryDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IGalleryDataGateway } from 'usecases';
import { GalleryNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = GALLERY_FILE_ENV;

export class GalleryDataGateway implements IGalleryDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<GalleryDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching gallery', error);
      return [];
    }
  }

  async create(data: GalleryDetailInput): Promise<GalleryDetail> {
    const currentGallery = await this.fetch();

    const newGallery = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentGallery.push(newGallery);

    const galleryDataString = JSON.stringify(currentGallery);
    await this.fileService.write(fileName, galleryDataString);

    return newGallery;
  }

  async update(id: string, data: GalleryDetailInput): Promise<GalleryDetail> {
    const currentGallery = await this.fetch();

    const indexToUpdate = currentGallery.findIndex(
      (gallery) => gallery.id === id
    );

    if (indexToUpdate < 0) {
      throw new GalleryNotFound();
    }

    const update = {
      ...currentGallery[indexToUpdate],
      ...data,
    };
    update.updatedAt = new Date();

    currentGallery[indexToUpdate] = update;

    const galleryDataString = JSON.stringify(currentGallery);
    await this.fileService.write(fileName, galleryDataString);

    return update;
  }

  async delete(id: string): Promise<any> {
    const currentGallery = await this.fetch();

    const indexToDelete = currentGallery.findIndex(
      (gallery) => gallery.id === id
    );

    if (indexToDelete < 0) {
      throw new GalleryNotFound();
    }

    currentGallery.splice(indexToDelete, 1);

    const galleryDataString = JSON.stringify(currentGallery);
    await this.fileService.write(fileName, galleryDataString);

    return currentGallery;
  }
}
