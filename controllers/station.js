'use strict';

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');

const station = {
  index(request, response){
    const stationId = request.params.id;
    logger.debug('Station id = ' + stationId);
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
    };
    response.render('station', viewData);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      code: request.body.code,
      temp: request.body.temp,
      windspeed: request.body.windspeed,
      pressure: request.body.pressure,
      winddirection: request.body.winddirection
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
  },
  
 deleteReading(request, response){
  const stationId = request.params.id;
  const readingId = request.params.readingid;
  logger.debug('Deleteing reading ${readingId} from Stations ${stationId}');
  stationStore.removeReading(stationId, readingId);
  response.redirect('/station/' + stationId);
}
  
};

module.exports = station;
