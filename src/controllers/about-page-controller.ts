import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { aboutPageUsecase } from 'usecases';

export const fetchAboutPage = async (req: AuthRequest, res: Response) => {
  const data = await aboutPageUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createAboutPage = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await aboutPageUsecase.create(input);

  return res.status(201).json({
    message: 'About Page created successfully',
    data,
  });
};

export const updateAboutPage = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await aboutPageUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'About Page updated successfully',
    data,
  });
};

export const deleteAboutPage = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await aboutPageUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'About Page deleted successfully',
  });
};
