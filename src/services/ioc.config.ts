import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {FizzbuzzApi} from './fizzbuzz.api';
import {FizzbuzzService} from './fizzbuzz.service';

const config: ContainerConfiguration[] = [
  {
    bind: FizzbuzzApi,
    to: FizzbuzzService,
    scope: Scope.Singleton
  }
];

export default config;