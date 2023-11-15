import {
  createOrUpdateProgram,
  deleteProgram,
  fetchPrograms,
  fetchSingleProgram,
} from 'controllers/program-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchPrograms).post(createOrUpdateProgram);

router.route('/:id').delete(deleteProgram).get(fetchSingleProgram);

export default router;
