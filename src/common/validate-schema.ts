import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import { logger } from './logger';

const validator = ajvErrors(new Ajv({ allErrors: true, jsonPointers: true }), {
  singleError: true,
});

export const validateSchema = (schema: { $id: string }, params): void => {
  logger.info('Validate params against schema', schema.$id);
  const valid = validator.compile(schema);
  valid(params);
  if (valid.errors && valid.errors.length) {
    throw Error(valid.errors[0].message);
  }
};
