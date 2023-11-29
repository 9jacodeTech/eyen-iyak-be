import { updateFooter, fetchFooter } from 'controllers/footer-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchFooter).put(updateFooter);

export default router;
