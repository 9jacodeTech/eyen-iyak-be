import {
  createProject,
  deleteProject,
  fetchProject,
  updateProject,
} from 'controllers/project';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchProject).post(createProject);

router.route('/:id').put(updateProject).delete(deleteProject);

export default router;
