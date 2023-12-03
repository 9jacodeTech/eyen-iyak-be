import type { SupportOfferDetailInput } from 'entities';
import type {
  ISupportOfferDataGateway,
  ISupportDataGateway,
} from './interfaces';
import { validateData } from 'utils/helpers';
import { supportOfferSchema } from 'schemas/supportOffer';

export class SupportOfferUseCase {
  constructor(
    private readonly dataGateway: ISupportOfferDataGateway,
    private readonly supportDataGateway: ISupportDataGateway
  ) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: SupportOfferDetailInput) {
    const SupportOfferData = validateData(supportOfferSchema, data);

    const supportType = await this.supportDataGateway.fetch();

    const supportIndex = supportType.findIndex(
      (support) => support.name.toLowerCase() === data.supportType.toLowerCase()
    );

    if (supportIndex < 0) {
      return null;
    } else {
      return await this.dataGateway.create(SupportOfferData);
    }
  }
}
