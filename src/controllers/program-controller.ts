import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { programUsecase } from 'usecases';

export const fetchPrograms = async (req: AuthRequest, res: Response) => {
  const data = await programUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createProgram = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await programUsecase.create(input);

  return res.status(201).json({
    message: 'Program was created successfully',
    data,
  });
};

export const updateProgram = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await programUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Program was updated successfully',
    data,
  });
};

export const deleteProgram = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await programUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Program was deleted successfully',
  });
};
