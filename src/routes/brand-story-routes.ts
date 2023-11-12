import {
  createBrandStory,
  fetchBrandStory,
} from 'controllers/brand-story-controller';
import { Router } from 'express';

const router = Router();

router.route('/brand-story').get(fetchBrandStory).post(createBrandStory);

export default router;
