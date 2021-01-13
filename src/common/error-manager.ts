import { logger } from './logger';

export const process = (error: Error): void => {
  logger.error('Error handled:', error);
};
