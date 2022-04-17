import {ApplicationError} from './application-error';

export class KeyNotFoundError extends ApplicationError {
  constructor() {
    super('storage-404');
  }
}
