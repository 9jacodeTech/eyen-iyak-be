import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { supportOfferUsecase } from 'usecases';

export const fetchSupportOffers = async (req: AuthRequest, res: Response) => {
  const data = await supportOfferUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createSupportOffer = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await supportOfferUsecase.create(input);

  return res.status(201).json({
    message: data
      ? 'Support was created successfully'
      : 'Invalid support type',
    data,
  });
};
