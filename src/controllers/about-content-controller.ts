import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { aboutContentUsecase } from 'usecases';

export const fetchAboutContent = async (req: AuthRequest, res: Response) => {
  const data = await aboutContentUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const createAboutContent = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await aboutContentUsecase.create(input);

  return res.status(201).json({
    message: 'About page content created successfully',
    data,
  });
};
