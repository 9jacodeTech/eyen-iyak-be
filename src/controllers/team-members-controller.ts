import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { teamMembersUsecase } from 'usecases';

export const fetchTeamMembers = async (req: AuthRequest, res: Response) => {
  const data = await teamMembersUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createTeamMember = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await teamMembersUsecase.create(input);

  return res.status(201).json({
    message: 'Team member was created successfully',
    data,
  });
};

export const updateTeamMember = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await teamMembersUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Team member updated successfully',
    data,
  });
};

export const deleteTeamMember = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await teamMembersUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Team member deleted successfully',
  });
};
