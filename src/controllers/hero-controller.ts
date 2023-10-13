import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { heroSectionUsecase } from 'usecases';

export const createHero = async (req: AuthRequest, res: Response) => {
  const input = req.body;

  const data = await heroSectionUsecase.create(input);

  return res.status(201).json({
    message: 'Hero Created Successfully',
    data,
  });
};

export const fetchHeroes = async (req: AuthRequest, res: Response) => {
  const data = await heroSectionUsecase.fetch();

  return res.status(200).json({
    data,
  });
};

export const updateHero = async (req: AuthRequest, res: Response) => {
  const input = req.body;
  const heroId = req.params.id;

  const data = await heroSectionUsecase.update(heroId, input);

  return res.status(200).json({
    msessage: 'Hero Updated Successfully',
    data,
  });
};

export const deleteHero = async (req: AuthRequest, res: Response) => {
  const heroId = req.params.id;

  await heroSectionUsecase.delete(heroId);

  return res.status(200).json({
    message: 'Hero Deleted Successfully',
  });
};
