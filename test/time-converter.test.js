const converteTime = require('../time-converter');
const chai = require('chai');

const expect = chai.expect;

describe('time converter test', () => {
  it('should convert to natural language date when given a unix timestamp', () => {
    const result = converteTime('1420981200');

    expect(result).deep.equals({ unix: 1420981200, natural: 'January 12, 2015' });
  });

  it('should convert to natural language date when given a floated unix timestamp', () => {
    const result = converteTime('1420981200.123456');

    expect(result).deep.equals({ unix: 1420981200, natural: 'January 12, 2015' });
  });

  it('should convert to natural language date when given a minus unix timestamp', () => {
    const result = converteTime('-1420981200');

    expect(result).deep.equals({ unix: -1420981200, natural: 'December 21, 1924' });
  });

  it('should convert to unix timestamp when given MMMM DD, YYYY', () => {
    const result = converteTime('January 12, 2015');

    expect(result).deep.equals({ unix: 1420981200, natural: 'January 12, 2015' });
  });

  it('should convert to unix timestamp when given MM DD, YYYY', () => {
    const result = converteTime('Jan 12, 2015');

    expect(result).deep.equals({ unix: 1420981200, natural: 'January 12, 2015' });
  });

  it('should convert to unix timestamp when given MM/DD/YYYY', () => {
    const result = converteTime('12/25/1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });

  it('should convert to unix timestamp when given MM-DD-YYYY', () => {
    const result = converteTime('12-25-1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });

  it('should convert to unix timestamp when given MM.DD.YYYY', () => {
    const result = converteTime('12.25.1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });

  it('should convert to unix timestamp when given MMMM.DD.YYYY', () => {
    const result = converteTime('December.25.1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });

  it('should convert to unix timestamp when given DD/MM/YYYY', () => {
    const result = converteTime('25/12/1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });

  it('should convert to unix timestamp when given DD MMMM, YYYY', () => {
    const result = converteTime('25 December, 1995');

    expect(result).deep.equals({ unix: 819810000, natural: 'December 25, 1995' });
  });
});
