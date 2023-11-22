import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { subProgramsUsecase } from 'usecases';

export const fetchPrograms = async (req: AuthRequest, res: Response) => {
  const data = await subProgramsUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createProgram = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await subProgramsUsecase.create(input);

  return res.status(201).json({
    message: 'Program was created successfully',
    data,
  });
};

export const updateProgram = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await subProgramsUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Program was updated successfully',
    data,
  });
};

export const deleteProgram = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await subProgramsUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Program was deleted successfully',
  });
};

export const fetchSingleProgram = async (req: AuthRequest, res: Response) => {
  const idToFetch = req.params.id;

  const data = await subProgramsUsecase.fetchById(idToFetch);

  return res.status(200).json({
    data,
  });
};
