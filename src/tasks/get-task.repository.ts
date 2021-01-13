import { logger } from '../common/logger';
import { Task } from './task.model';

export const getTask = async (id: string): Promise<Task> => {
  logger.debug('get-task repository. Id:', id);
  return Task.findByPk(id);
};
