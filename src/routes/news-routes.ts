import {
  createNews,
  deleteNews,
  fetchNews,
  updateNews,
} from 'controllers/news-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchNews).post(createNews);

router.route('/:id').put(updateNews).delete(deleteNews);

export default router;
