const moment = require('moment');

const supportedDateFormats = ['MMMM DD, YYYY', 'MM DD YYYY', 'DD MM YYYY', 'DD MMMM, YYYY'];

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function convertTime(time) {
  const parsedTime = isNumber(time) ? moment.unix(time) : moment(time, supportedDateFormats);

  return {
    unix: parsedTime.unix(),
    natural: parsedTime.format('MMMM DD, YYYY'),
  };
}

module.exports = convertTime;
