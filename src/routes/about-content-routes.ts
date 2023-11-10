import {
  createAboutContent,
  fetchAboutContent,
} from 'controllers/about-content-controller';
import { Router } from 'express';

const router = Router();

router.route('/content').get(fetchAboutContent).post(createAboutContent);

export default router;
