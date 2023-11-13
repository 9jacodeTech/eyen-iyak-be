import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { searchUsecase } from 'usecases';

export const searchResult = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await searchUsecase.fetch(input);

  return res.status(200).json({
    data,
  });
};
