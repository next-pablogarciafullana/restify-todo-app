import { logger } from '../common/logger';
import { Task } from './task.model';
import { Sequelize } from 'sequelize';
import { ModifyTaskDTO } from './modify-task.dto';

export const modifyTask = async (
  modifyTaskDTO: ModifyTaskDTO,
): Promise<Task> => {
  logger.debug(`modify-task repository. Dto: ${modifyTaskDTO}`);
  const [count, rows] = await Task.update(
    {
      title: modifyTaskDTO.title,
      description: modifyTaskDTO.description,
      updatedat: Sequelize.fn('NOW'),
    },
    { where: { id: modifyTaskDTO.id }, returning: true },
  );

  return count ? rows[0] : undefined;
};
