import { Request } from 'restify';
import { logger } from '../common/logger';
import { CreateTaskDTO } from './create-task.dto';
import { createTask as createTaskRepository } from './create-task.repository';
import { Task } from './task.model';

export const createTask = async (request: Request): Promise<Task> => {
  logger.debug('create-task controller. Params:', request);
  const createTaskDTO: CreateTaskDTO = {
    title: request.body.title,
    description: request.body.description,
  };
  return createTaskRepository(createTaskDTO);
};
