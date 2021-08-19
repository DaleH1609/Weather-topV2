'use strict';

const uuid = require('uuid');

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require('../utils/station-analytics.js');


const station = {
  index(request, response){
    const stationId = request.params.id;
    logger.debug('Station id = ' + stationId)
    const latestTemp = stationAnalytics.getLatestTemp(station);
    const latestPressure = stationAnalytics.getLatestPressure(station);
    console.log(latestTemp);
    console.log(latestPressure);
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
      stationSummary : {
        //latestTemp: stationAnalytics.getLatestTemp(station),
        latestTemp:25,
        latestPressure: stationAnalytics.getLatestPressure(station)
      }
    };
    response.render('station', viewData);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
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
