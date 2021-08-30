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
    const getMaxWindspeed = stationAnalytics.getMaxWindspeed(station);
    const getMinWindspeed = stationAnalytics.getMinWindspeed(station);
    const chillLatest = stationAnalytics.chillLatest(station);
    const windTrend = stationAnalytics.windTrend(station);
    const tempTrend = stationAnalytics.tempTrend(station);
    const pressureTrend = stationAnalytics.pressureTrend(station);
    const weatherIcon = stationAnalytics.weatherIcon(station);
    const weatherLatest = stationAnalytics.weatherLatest(station);
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
        getMinPressure: stationAnalytics.getMinTemp(station),
        getMaxWindspeed: stationAnalytics.getMaxWindspeed(station),
        getMinWindspeed: stationAnalytics.getMinWindspeed(station),
        chillLatest: stationAnalytics.chillLatest(station),
        windTrend: stationAnalytics.windTrend(station),
        tempTrend: stationAnalytics.tempTrend(station),
        pressureTrend: stationAnalytics.pressureTrend(station),
        weatherLatest: stationAnalytics.weatherLatest(station),
        weatherIcon: stationAnalytics.weatherIcon(station)
      }
    };
    response.render('station', viewData);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      date: new Date().toISOString(),
      code: request.body.code,
      temp: request.body.temp,
      windspeed: request.body.windspeed,
      pressure: request.body.pressure,
      windDirection: request.body.windDirection,
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
