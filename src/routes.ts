import restify from 'restify';
import { controllerHandler } from './common/middleware/controller-handler';
import { validate } from './common/middleware/validate';
import { health } from './health/health.controller';
import { controllers, schemas } from './tasks';

export const routes = (server: restify.Server): void => {
  // health
  server.get('/health', health);

  // static
  server.get(
    '/',
    restify.plugins.serveStatic({
      directory: './public/views',
      file: 'index.html',
    }),
  );

  // tasks
  server.get('/tasks', controllerHandler(controllers.listTasks));
  server.post(
    '/tasks',
    validate(schemas.createTask),
    controllerHandler(controllers.createTask, 201),
  );
  server.get(
    '/tasks/:id',
    validate(schemas.getTask),
    controllerHandler(controllers.getTask),
  );
  server.put(
    '/tasks/:id',
    validate(schemas.modifyTask),
    controllerHandler(controllers.modifyTask),
  );
  server.del(
    '/tasks/:id',
    validate(schemas.deleteTask),
    controllerHandler(controllers.deleteTask),
  );
};
