import {
  createPartner,
  deletePartner,
  fetchPartners,
  updatePartner,
} from '../controllers/partner-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchPartners).post(createPartner);

router.route('/:id').put(updatePartner).delete(deletePartner);

export default router;
