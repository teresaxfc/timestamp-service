const chai = require('chai');
const request = require('supertest-as-promised');
const server = require('../server');

const expect = chai.expect;

describe('timestamp service test', () => {
  it('Should return default home page', () => request(server)
    .get('/')
    .expect(200)
    .then((response) => {
      expect(response.text).contains('API Basejump: Timestamp microservice');
    }));

  it('should return time info when given a unix timestamp', () => request(server)
    .get('/123456')
    .expect(200)
    .then((response) => {
      expect(response.body).deep.equals({ unix: 123456, natural: 'January 02, 1970' });
    }));

  it('should return time info when given a natural language date', () => request(server)
    .get('/January 02, 1970')
    .expect(200)
    .then((response) => {
      expect(response.body).deep.equals({ unix: 50400, natural: 'January 02, 1970' });
    }));
});
