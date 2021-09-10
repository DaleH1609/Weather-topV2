'use strict';

const uuid = require('uuid');
const axios = require("axios");
const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require('../utils/station-analytics.js');


const station = {
  index(request, response){
    const stationId = request.params.id;
    logger.debug('Station id = ' + stationId)
    const station = stationStore.getStation(stationId);
    const title = request.params.title;
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
          title: title,
          station: stationStore.getStation(stationId),
          latestTemp: stationAnalytics.getLatestTemp(station),
          latestPressure: stationAnalytics.getLatestPressure(station),
          celsiusToFahrenheit: stationAnalytics.celsiusToFahrenheit(station),
          windSpeedLatest: stationAnalytics.windSpeedLatest(station),
          windCompass: stationAnalytics.windCompass(station),
          getMinTemp: stationAnalytics.getMinTemp(station),
          getMaxTemp: stationAnalytics.getMaxTemp(station),
          getMaxPressure: stationAnalytics.getMaxPressure(station),
          getMinPressure: stationAnalytics.getMinPressure(station),
          getMaxWindspeed: stationAnalytics.getMaxWindspeed(station),
          getMinWindspeed: stationAnalytics.getMinWindspeed(station),
          chillLatest: stationAnalytics.chillLatest(station),
          windTrend: stationAnalytics.windTrend(station),
          tempTrend: stationAnalytics.tempTrend(station),
          pressureTrend: stationAnalytics.pressureTrend(station),
          weatherLatest: stationAnalytics.weatherLatest(station),
          weatherIcon: stationAnalytics.weatherIcon(station)
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
      windSpeed: request.body.windSpeed,
      pressure: request.body.pressure,
      windDirection: request.body.windDirection,
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
  },

  async addreport(request, response) {
    logger.info("rendering new report");
    let report = {};
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const lat = stationStore.getLatitude(stationId);
    const lng = stationStore.getLongitude(stationId);
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=d16a1bf2c697803e8c8d5236e58d4fbd`
    const result = await axios.get(requestUrl);
    if (result.status == 200) {
      const reading = result.data.current;
      report.code = reading.weather[0].id;
      report.temperature = reading.temp;
      report.windSpeed = reading.wind_speed;
      report.pressure = reading.pressure;
      report.windDirection = reading.wind_deg;
    }
    const autoReading = {
      id: uuid.v1(),
      date: new Date().toISOString(),
      code: report.code,
      temp: report.temperature,
      windSpeed: report.windSpeed,
      pressure: report.pressure,
      windDirection: report.windDirection
    };
    stationStore.addReading(stationId, autoReading);
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
