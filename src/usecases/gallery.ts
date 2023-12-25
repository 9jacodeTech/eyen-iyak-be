import { type GalleryDetailInput } from 'entities';
import { type IGalleryDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { galleryInputSchema } from 'schemas/gallery';
import { GalleryNotFound } from 'utils/errors';

export class GalleryUsecase {
  constructor(private readonly dataGateway: IGalleryDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async getOneById(galleryId: string) {
    const items = await this.dataGateway.fetch();

    const singleGallery = items.find((gallery) => gallery.id === galleryId);
    if (!singleGallery) throw new GalleryNotFound();

    return singleGallery;
  }

  async create(data: GalleryDetailInput) {
    const galleryData = validateData(galleryInputSchema, data);

    return await this.dataGateway.create(galleryData);
  }

  async update(idToUpdate: string, data: GalleryDetailInput) {
    const galleryData = validateData(galleryInputSchema, data);

    return await this.dataGateway.update(idToUpdate, galleryData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
