import {
  createProgram,
  deleteProgram,
  fetchPrograms,
  updateProgram,
} from 'controllers/program-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchPrograms).post(createProgram);

router.route('/:id').put(updateProgram).delete(deleteProgram);

export default router;
