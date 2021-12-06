import {GET, Path, PathParam, QueryParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {FizzbuzzApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/fizzbuzz')
export class FizzbuzzController {

  @Inject
  service: FizzbuzzApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('FizzbuzzController');
  }

  @GET
  async FizzbuzzUnknown(@QueryParam("value") value: number): Promise<string> {
    this.logger.info('Saying hello to someone');
    return this.service.fizzbuzz(value);
  }

}
