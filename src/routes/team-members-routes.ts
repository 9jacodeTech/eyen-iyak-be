import {
  createTeamMember,
  deleteTeamMember,
  fetchTeamMembers,
  updateTeamMember,
} from '../controllers/team-members-controller';
import { Router } from 'express';

const router = Router();

router.route('/team-members').get(fetchTeamMembers).post(createTeamMember);

router
  .route('/team-members/:id')
  .put(updateTeamMember)
  .delete(deleteTeamMember);

export default router;
