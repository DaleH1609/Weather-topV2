"use strict"

const logger = require("../utils/logger");
const stationStore = require('../models/station-store.js');
const stationAnalytics = require('../utils/station-analytics.js');
const accounts = require ('./accounts.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    const stationId = request.params.id;
    logger.info("dashboard rendering");
    const getAllStations = stationStore.getAllStations();
    const loggedInUser = accounts.getCurrentUser(request);
    const station = stationStore.getStation(stationId);
    const stations = stationStore.getUserStations(loggedInUser.id);
    function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
    return -1;
    }
    if ( a.last_nom > b.last_nom ){
    return 1;
    }
    return 0;
    }
    for (let station in stations){
      station.getMaxTemp = stationAnalytics.getMaxTemp(station);
      station.getMinTemp = stationAnalytics.getMinTemp(station);
      station.geMaxPressure = stationAnalytics.getMaxPressure(station);
      station.geMinPressure = stationAnalytics.getMinPressure(station);
      station.geMaxWindSpeed = stationAnalytics.getMaxWindspeed(station);
      station.geMinWindSpeed = stationAnalytics.getMinWindspeed(station);
      station.windTrend = stationAnalytics.windTrend(station);
      station.pressureTrend = stationAnalytics.pressureTrend(station);
      station.tempTrend = stationAnalytics.tempTrend(station);
      station.getWeatherLatest = stationAnalytics.weatherLatest(station);
      station.geWeatherIcon = stationAnalytics.weatherIcon(station);
      station.celsiusToFahrenheit = stationAnalytics.celsiusToFahrenheit(station);
      station.windSpeedLatest = stationAnalytics.windSpeedLatest(station);
    }
    const viewData = {
      title: "Weather Top Dashboard",
      stations: stations.sort(compare)
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render("dashboard", viewData);
  },
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      readings: [],
    };
    logger.debug("Creating a new Station", newStation);
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
  
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
