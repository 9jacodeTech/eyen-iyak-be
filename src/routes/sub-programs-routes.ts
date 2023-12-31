import {
  createProgram,
  updateProgram,
  deleteProgram,
  fetchPrograms,
  fetchSingleProgram,
} from 'controllers/sub-program-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchPrograms).post(createProgram);

router
  .route('/:id')
  .put(updateProgram)
  .delete(deleteProgram)
  .get(fetchSingleProgram);

export default router;
