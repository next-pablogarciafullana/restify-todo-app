import { Next, Request, Response } from 'restify';

export const controllerHandler = (
  controller,
  statusCode = 200,
  contentType = 'application/json',
) => async (req: Request, res: Response, next: Next): Promise<void> => {
  try {
    const response = await controller(req);
    res.send(statusCode, response, {
      'content-type': contentType,
    });
  } catch (error) {
    next(error);
  }
  next();
};
