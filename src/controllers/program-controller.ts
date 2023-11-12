import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { programUsecase } from 'usecases';

export const fetchPrograms = async (req: AuthRequest, res: Response) => {
  const data = await programUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createOrUpdateProgram = async (
  req: AuthRequest,
  res: Response
) => {
  const input = req.body;

  const data = await programUsecase.createOrUpdate(input);

  return res.status(201).json({
    message: 'Program was created successfully',
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

export const fetchSingleProgram = async (req: AuthRequest, res: Response) => {
  const idToFetch = req.params.id;

  const data = await programUsecase.fetchById(idToFetch);

  return res.status(200).json({
    data,
  });
};
