import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { supportUsecase } from 'usecases';

export const fetchSupports = async (req: AuthRequest, res: Response) => {
  const data = await supportUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createSupport = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await supportUsecase.create(input);

  return res.status(201).json({
    message: data
      ? 'Support was created successfully'
      : 'Support already exist',
    data,
  });
};

export const updateSupport = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await supportUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: data
      ? 'Support was created successfully'
      : 'Support already exist',
    data,
  });
};

export const deleteSupport = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await supportUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Support deleted successfully',
  });
};
