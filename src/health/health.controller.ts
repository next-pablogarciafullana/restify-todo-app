import { Next, Request, Response } from 'restify';
import { logger } from '../common/logger';

export const health = (req: Request, res: Response, next: Next): void => {
  logger.debug('health controller');
  res.send(200, 'Server is running.');
  next();
};
