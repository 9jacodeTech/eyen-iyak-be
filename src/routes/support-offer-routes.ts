import {
  createSupportOffer,
  fetchSupportOffers,
} from 'controllers/support-offer-controller';
import { Router } from 'express';

const router = Router();

router.route('/offer').get(fetchSupportOffers).post(createSupportOffer);

export default router;
