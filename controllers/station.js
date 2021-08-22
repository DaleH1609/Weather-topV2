'use strict';

const uuid = require('uuid');

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require('../utils/station-analytics.js');


const station = {
  index(request, response){
    const stationId = request.params.id;
    logger.debug('Station id = ' + stationId)
    const station = stationStore.getStation(stationId);
    const latestTemp = stationAnalytics.getLatestTemp(station);
    const latestPressure = stationAnalytics.getLatestPressure(station);
    const celciusToFahrenheit = stationAnalytics.celsiusToFahrenheit(station);
    const windSpeedLatest = stationAnalytics.windSpeedLatest(station);
    const windCompass = stationAnalytics.windCompass(station);
    const getMinTemp = stationAnalytics.getMinTemp(station);
    const getMaxTemp = stationAnalytics.getMaxTemp(station);
    const getMaxPressure = stationAnalytics.getMaxPressure(station);
    const getMinPressure = stationAnalytics.getMinPressure(station);
    console.log(latestTemp);
    console.log(latestPressure);
    console.log(celciusToFahrenheit);
    console.log(windSpeedLatest);
    console.log(windCompass);
    console.log(getMinTemp);
    console.log(getMaxTemp);
    console.log(getMaxPressure);
    console.log(getMinPressure);
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
      stationSummary : {
        latestTemp: stationAnalytics.getLatestTemp(station),
        latestPressure: stationAnalytics.getLatestPressure(station),
        celsiusToFahrenheit: stationAnalytics.celsiusToFahrenheit(station),
        windSpeedLatest: stationAnalytics.windSpeedLatest(station),
        windCompass: stationAnalytics.windCompass(station),
        getMinTemp: stationAnalytics.getMinTemp(station),
        getMaxTemp: stationAnalytics.getMaxTemp(station),
        getMaxPressure: stationAnalytics.getMaxTemp(station),
        getMinPressure: stationAnalytics.getMinTemp(station)
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
