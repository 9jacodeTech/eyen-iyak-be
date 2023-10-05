import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { newsUsecase } from 'usecases';

export const fetchNews = async (req: AuthRequest, res: Response) => {
  const data = await newsUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createNews = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await newsUsecase.create(input);

  return res.status(201).json({
    message: 'News was created successfully',
    data,
  });
};

export const updateNews = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await newsUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'News updated successfully',
    data,
  });
};

export const deleteNews = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await newsUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'News deleted successfully',
  });
};
