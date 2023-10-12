import { GalleryDetailInput } from 'entities';
import { IGalleryDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { galleryInputSchema } from 'schemas/gallery';

export class GalleryUsecase {
  constructor(private readonly dataGateway: IGalleryDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
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
