import { Container } from "typescript-ioc";

export * from './fizzbuzz.api';
export * from './fizzbuzz.service';

import config from './ioc.config';

Container.configure(...config);