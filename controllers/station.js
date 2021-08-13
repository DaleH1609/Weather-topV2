'use strict';

const logger = require('../utils/logger');
const stationCollection = require('../models/playlist-store.js');

const station = {
  index(request, response){
    const stationId = request.params.id;
    logger.info('Station id = ' + stationId);
    const viewData = {
      title: 'Station',
    };
    response.render('playlist', viewData);
  },
};

module.exports = station;
