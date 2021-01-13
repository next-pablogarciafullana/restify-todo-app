import { DataTypes, Model, Sequelize } from 'sequelize';
import { connection } from '../common/db/connection';

export class Task extends Model {
  id: string;
  title: string;
  description: string;
  createdat: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    createdat: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedat: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize: connection,
    tableName: 'tasks',
    schema: 'taskmanager',
    timestamps: false,
  },
);
