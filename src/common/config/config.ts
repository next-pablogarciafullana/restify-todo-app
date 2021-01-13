import { Config } from './config.model';

const config: Config = {
  name: 'restify-example-app',
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT) || 3000,
  log: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  db: {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE || 'postgres',
  },
  environment: process.env.NODE_ENV || 'DEV',
};

export = config;
