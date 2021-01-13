import { Sequelize } from 'sequelize';
import { db } from '../config/config';
import { logger } from '../logger';

export const connection = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'postgres',
  logging: logger.debug.bind(logger),
});
