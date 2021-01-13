import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { validateSchema } from '../validate-schema';

export const validate = schema => async (
  req: Request,
  res: Response,
  next: Next,
): Promise<void> => {
  const params = { ...req.params, body: req.body, headers: req.headers };

  try {
    validateSchema(schema, params);
  } catch (error) {
    next(new BadRequestError(error.message));
  }

  next();
};
