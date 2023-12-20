import {
  createGallery,
  deleteGallery,
  fetchGallery,
  fetchSingleGalleryById,
  updateGallery,
} from 'controllers/gallery-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchGallery).post(createGallery);

router
  .route('/:id')
  .put(updateGallery)
  .delete(deleteGallery)
  .get(fetchSingleGalleryById);

export default router;
