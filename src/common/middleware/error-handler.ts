import { HttpError } from 'restify-errors';
import { Request, Response } from 'restify';
import { process } from '../error-manager';

export const errorHandler = (req: Request, res: Response, err: any): void => {
  process(err);

  if (err instanceof HttpError) {
    res.send(err.statusCode, {
      code: err.code,
      message: err.message,
    });
  } else {
    res.send(500, {
      code: 'InternalServerError',
      message: 'Internal server error',
    });
  }
};
