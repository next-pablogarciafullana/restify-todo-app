import { NotFoundError } from 'restify-errors';
import { Request } from 'restify';
import { logger } from '../common/logger';
import { getTask as getTaskRepository } from './get-task.repository';
import { Task } from './task.model';

export const getTask = async (request: Request): Promise<Task> => {
  logger.debug('get-task controller. Params:', request);
  const task = await getTaskRepository(request.params.id);
  if (!task) {
    throw new NotFoundError('Task not found.');
  }
  return task;
};
