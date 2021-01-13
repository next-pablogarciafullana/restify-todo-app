import Logger, * as bunyan from 'bunyan';
import * as restify from 'restify';
import * as config from './config/config';

export const logger = bunyan.createLogger({
  name: config.name,
  level: config.log.level as bunyan.LogLevelString,
  serializers: {
    req: Logger.stdSerializers.req,
    res: restify.bunyan.serializers.client_req,
  },
});
