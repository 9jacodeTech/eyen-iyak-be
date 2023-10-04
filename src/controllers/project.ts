import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { projectUsecase } from 'usecases';

export const fetchProject = async (req: AuthRequest, res: Response) => {
  const data = await projectUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createProject = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await projectUsecase.create(input);

  return res.status(201).json({
    message: 'Project created successfully',
    data,
  });
};

export const updateProject = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await projectUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Project updated successfully',
    data,
  });
};

export const deleteProject = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await projectUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Project deleted successully',
  });
};
