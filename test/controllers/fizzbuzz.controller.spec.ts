import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {FizzbuzzApi} from '../../src/services';
import {buildApiServer} from '../helper';

class MockFizzbuzzService implements FizzbuzzApi {
  fizzbuzz = jest.fn().mockName('fizzbuzz');
}

describe('fizzbuzz.controller', () => {

  let app: Application;
  let mockfizzbuzz: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(FizzbuzzApi).scope(Scope.Singleton).to(MockFizzbuzzService);

    const mockService: FizzbuzzApi = Container.get(FizzbuzzApi);
    mockfizzbuzz = mockService.fizzbuzz as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

});
