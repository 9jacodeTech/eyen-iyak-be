import {
  createOrUpdateHero,
  deleteHero,
  fetchHeroes,
  updateHero,
} from 'controllers/hero-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchHeroes).post(createOrUpdateHero);

router.route('/:id').put(updateHero).delete(deleteHero);

export default router;
