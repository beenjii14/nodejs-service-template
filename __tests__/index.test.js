import supertest from 'supertest';

import { app, server } from '../src/';

const api = supertest(app);

describe('Testing for server', () => {
  afterAll(() => {
    server.close();
  });

  test('You must create a new server', (done) => {
    api
      .post('/')
      .expect(200)
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .end(() => {
        done();
      });
  });
});
