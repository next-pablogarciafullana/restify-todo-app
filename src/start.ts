import { server } from './server';
import { logger } from './common/logger';
import { name, host, port } from './common/config/config';

const start = async (): Promise<void> => {
  const app = await server();
  app.listen(port, () => {
    logger.info(`${name} listening at ${host}:${port}`);
  });
};

start().catch(error => {
  logger.error(error.message);
  process.exit(-1);
});
