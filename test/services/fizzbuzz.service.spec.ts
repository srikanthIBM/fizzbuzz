import {Container} from 'typescript-ioc';

import {FizzbuzzService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: FizzbuzzService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(FizzbuzzService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe("Test FizzBuzz for given numbers", () => {

    test('fizzbuzz of number 1 should return number 1 as a string', async () => {
       expect( await service.fizzbuzz(1)).toEqual('1')
    }) 

    test('fizzbuzz of number 2 should return number 2 as a string', async () => {
        expect( await service.fizzbuzz(2)).toEqual('2')
    })

    test('fizzbuzz of number 4 should return number 4 as a string', async () => {
        expect( await service.fizzbuzz(4)).toEqual('4')
    })

    test('fizzbuzz of number 3 should return number Fizz as a string', async () => {
        expect( await service.fizzbuzz(3)).toEqual('Fizz')
    })

    test('fizzbuzz of number 6 should return number Fizz as a string', async () => {
        expect( await service.fizzbuzz(6)).toEqual('Fizz')
    })

    test('fizzbuzz of number 9 should return number Fizz as a string', async () => {
        expect( await service.fizzbuzz(9)).toEqual('Fizz')
    })

    test('fizzbuzz of number 10 should return number Buzz as a string', async () => {
        expect( await service.fizzbuzz(10)).toEqual('Buzz')
    })

    test('fizzbuzz of number 20 should return number Buzz as a string', async () => {
        expect( await service.fizzbuzz(20)).toEqual('Buzz')
    })

    test('fizzbuzz of number 30 should return number FizzBuzz as a string', async () => {
        expect( await service.fizzbuzz(30)).toEqual('FizzBuzz')
    })

    test('fizzbuzz of number 60 should return number FizzBuzz as a string', async () => {
        expect( await service.fizzbuzz(60)).toEqual('FizzBuzz')
    })

    test('fizzbuzz of number 0 should return number FizzBuzz as a string', async () => {
        expect( await service.fizzbuzz(0)).toEqual('0')
    })

});
});
