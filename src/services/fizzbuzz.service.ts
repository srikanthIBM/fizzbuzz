import {FizzbuzzApi} from './fizzbuzz.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class FizzbuzzService implements FizzbuzzApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('FizzbuzzService');
  }

  async fizzbuzz(number: number = 0): Promise<string> {
    if (number == 0){
      return '0'
  }
  else if (number % 3 == 0 && number % 5 == 0 ){
      return 'FizzBuzz'
  }
  else if (number % 3 == 0){
      return 'Fizz'
  }
  else if (number % 5 == 0){
      return 'Buzz'
  }
  return number.toString()
  }
}
