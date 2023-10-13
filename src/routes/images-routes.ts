import { Router } from 'express';
import { generatePresignedURL } from '../controllers/images-controller';

const router = Router();

router.route('/generate-presigned-image-url').post(generatePresignedURL);

export default router;
