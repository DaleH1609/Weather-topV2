'use strict';

const logger = require('../utils/logger');

const tramore = {
  title: 'Tramore',
  readings: [
    {
      code: '1',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
    {
      code: '2',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
    {
      code: '3',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
  ],
};

const dunmore = {
  title: 'Dunmore',
  readings: [
    {
      code: '1',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
    {
      code: '2',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
    {
      code: '3',
      temp:'32',
      windspeed:'200',
      pressure:'12'
    },
  ],
};

const stationCollection = [tramore, dunmore];

module.exports = stationCollection;