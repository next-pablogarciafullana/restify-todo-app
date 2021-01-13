import { logger } from '../common/logger';
import { Task } from './task.model';

export const deleteTask = async (id: string): Promise<number> => {
  logger.debug('delete-task repository. Id:', id);
  return Task.destroy({ where: { id } });
};
