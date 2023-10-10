import {
  createAboutPage,
  deleteAboutPage,
  fetchAboutPage,
  updateAboutPage,
} from 'controllers/about-page-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchAboutPage).post(createAboutPage);

router.route('/:id').put(updateAboutPage).delete(deleteAboutPage);

export default router;
