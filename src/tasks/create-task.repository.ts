import { logger } from '../common/logger';
import { CreateTaskDTO } from './create-task.dto';
import { Task } from './task.model';

export const createTask = async (
  createTaskDTO: CreateTaskDTO,
): Promise<Task> => {
  logger.debug('create-task repository. Dto:', createTaskDTO);
  return Task.create(createTaskDTO);
};
