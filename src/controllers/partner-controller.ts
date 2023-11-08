import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { partnerUsecase } from 'usecases';

export const fetchPartners = async (req: AuthRequest, res: Response) => {
  const data = await partnerUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createPartner = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await partnerUsecase.create(input);

  return res.status(201).json({
    message: 'Partner was created successfully',
    data,
  });
};

export const updatePartner = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const idToUpdate = req.params.id;

  const data = await partnerUsecase.update(idToUpdate, input);

  return res.status(200).json({
    message: 'Partner updated successfully',
    data,
  });
};

export const deletePartner = async (req: AuthRequest, res: Response) => {
  const idToDelete = req.params.id;

  await partnerUsecase.delete(idToDelete);

  return res.status(200).json({
    message: 'Partner deleted successfully',
  });
};
