import {ApplicationError} from './application-error';

export class CityExistsError extends ApplicationError {
  constructor() {
    super('city-001');
  }
}
