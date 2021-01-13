// Controllers
import { getTask } from './get-task.controller';
import { listTasks } from './list-tasks.controller';
import { createTask } from './create-task.controller';
import { modifyTask } from './modify-task.controller';
import { deleteTask } from './delete-task.controller';

// Schemas
import getTaskSchema from './get-task.schema.json';
import createTaskSchema from './create-task.schema.json';
import modifyTaskSchema from './modify-task.schema.json';
import deleteTaskSchema from './delete-task.schema.json';

export const controllers = {
  getTask,
  listTasks,
  createTask,
  modifyTask,
  deleteTask,
};

export const schemas = {
  getTask: getTaskSchema,
  createTask: createTaskSchema,
  modifyTask: modifyTaskSchema,
  deleteTask: deleteTaskSchema,
};
