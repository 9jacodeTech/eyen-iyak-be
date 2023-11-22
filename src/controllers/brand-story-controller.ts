import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { brandStoryUsecase } from 'usecases';

export const fetchBrandStory = async (req: AuthRequest, res: Response) => {
  const data = await brandStoryUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createBrandStory = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await brandStoryUsecase.create(input);

  return res.status(201).json({
    message: 'Brand story was created successfully',
    data,
  });
};
