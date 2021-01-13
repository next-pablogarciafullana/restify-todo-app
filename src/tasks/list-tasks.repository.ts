import { logger } from '../common/logger';
import { Task } from './task.model';

export const listTasks = async (): Promise<Task[]> => {
  logger.debug('list-task repository');
  return Task.findAll();
};
