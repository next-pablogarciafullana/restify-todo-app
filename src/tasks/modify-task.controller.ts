import { logger } from '../common/logger';
import { NotFoundError } from 'restify-errors';
import { modifyTask as modifyTaskRepository } from './modify-task.repository';
import { ModifyTaskDTO } from './modify-task.dto';
import { Task } from './task.model';
import { Request } from 'restify';

export const modifyTask = async (request: Request): Promise<Task> => {
  logger.debug('modify-task controller. Params:', request);
  const modifyTaskDTO: ModifyTaskDTO = {
    id: request.params.id,
    title: request.body.title,
    description: request.body.description,
  };
  const task = await modifyTaskRepository(modifyTaskDTO);
  if (!task) {
    throw new NotFoundError('Task not found.');
  }
  return task;
};
