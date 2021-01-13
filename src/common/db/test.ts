import { logger } from '../logger';

export const test = connection => async (): Promise<void> => {
  try {
    await connection.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};
