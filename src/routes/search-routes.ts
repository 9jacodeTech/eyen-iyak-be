import { searchResult } from 'controllers/search-controller';
import { Router } from 'express';

const router = Router();

router.route('/').post(searchResult);

export default router;
