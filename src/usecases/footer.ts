import { type FooterDetailInput } from 'entities';
import { type IFooterDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { footerSchema } from 'schemas/footer';

export class FooterUsecase {
  constructor(private readonly dataGateway: IFooterDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async update(data: FooterDetailInput) {
    const footerData = validateData(footerSchema, data);

    return await this.dataGateway.update(footerData);
  }
}
