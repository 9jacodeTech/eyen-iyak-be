import {
  createSupport,
  deleteSupport,
  fetchSupports,
  updateSupport,
} from '../controllers/support-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchSupports).post(createSupport);

router.route('/:id').put(updateSupport).delete(deleteSupport);

export default router;
