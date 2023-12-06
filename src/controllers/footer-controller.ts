import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { footerUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchFooter = async (req: AuthRequest, res: Response) => {
  try {
    const data = await footerUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateFooter = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await footerUsecase.update(input);

    return res.status(200).json({
      msg: 'Footer updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
