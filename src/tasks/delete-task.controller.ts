import { logger } from '../common/logger';
import { NotFoundError } from 'restify-errors';
import { deleteTask as deleteTaskRepository } from './delete-task.repository';
import { Request } from 'restify';

export const deleteTask = async (request: Request): Promise<void> => {
  logger.debug('delete-task controller. Params:', request);
  const count = await deleteTaskRepository(request.params.id);
  if (!count) {
    throw new NotFoundError();
  }
};
