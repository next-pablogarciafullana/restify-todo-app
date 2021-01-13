import { logger } from '../common/logger';
import { listTasks as listTasksRepository } from './list-tasks.repository';
import { Task } from './task.model';

export const listTasks = async (): Promise<Task[]> => {
  logger.debug('list-tasks controller.');
  return listTasksRepository();
};
