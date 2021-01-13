import * as restify from 'restify';
import { Next, Request, Response } from 'restify';
import { logger } from '../logger';

export const auditLogger = (
  req: Request,
  res: Response,
  next: Next,
  error: any,
): void => {
  restify.plugins.auditLogger({ log: logger, event: 'after' })(
    req,
    res,
    next,
    error,
  );
};
