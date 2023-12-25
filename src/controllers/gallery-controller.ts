import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { galleryUsecase } from 'usecases';

export const fetchGallery = async (req: AuthRequest, res: Response) => {
  const data = await galleryUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const fetchSingleGalleryById = async (
  req: AuthRequest,
  res: Response
) => {
  const data = await galleryUsecase.getOneById(req.params.id);

  return res.status(200).json({
    data,
  });
};

export const createGallery = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await galleryUsecase.create(input);

  return res.status(201).json({
    message: 'Gallery created successfully',
    data,
  });
};

export const updateGallery = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await galleryUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Gallery updated successfully',
    data,
  });
};

export const deleteGallery = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await galleryUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Gallery deleted successfully',
  });
};
