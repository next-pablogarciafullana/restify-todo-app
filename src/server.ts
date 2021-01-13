import restify from 'restify';
import { routes } from './routes';
import { name } from './common/config/config';
import { test, connection } from './common/db';
import { errorHandler } from './common/middleware/error-handler';
import { auditLogger } from './common/middleware/audit-logger';
import { logger } from './common/logger';

export const server = async (): Promise<restify.Server> => {
  const server = restify.createServer({ name });

  await test(connection);

  server.pre((req, res, next): void => {
    const requestId = req.header('X-Request-ID') || req.getId();
    logger.fields.request_id = requestId;
    res.setHeader('X-Request-ID', requestId);
    next();
  });

  server.use(restify.plugins.acceptParser(['application/json']));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());

  server.on('restifyError', errorHandler);
  server.on('after', auditLogger);

  routes(server);

  return server;
};
