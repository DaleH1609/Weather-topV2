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
    const stations = stationStore.getUserStations(loggedInUser.id);
    for (let i =0; i < getAllStations.length; i++){
      const station = getAllStations[i];
      station.getMaxTemp = stationAnalytics.getMaxTemp(station);
      station.getMinTemp = stationAnalytics.getMaxTemp(station);
      station.geMaxPressure = stationAnalytics.getMaxTemp(station);
      station.geMinPressure = stationAnalytics.getMaxTemp(station);
      station.geMaxWindSpeed = stationAnalytics.getMaxTemp(station);
      station.geMinWindSpeed = stationAnalytics.getMaxTemp(station);
      station.windTrend = stationAnalytics.getMaxTemp(station);
      station.pressureTrend = stationAnalytics.getMaxTemp(station);
      station.tempTrend = stationAnalytics.getMaxTemp(station);
      station.getWeatherLatest = stationAnalytics.getMaxTemp(station);
      station.geWeatherIcon = stationAnalytics.getMaxTemp(station);
      station.celsiusToFahrenheit = stationAnalytics.getMaxTemp(station);
      station.windSpeedLatest = stationAnalytics.getMaxTemp(station);
    }
    const viewData = {
      title: "Weather Top Dashboard",
      stations: stations,
      getMaxTemp: stationAnalytics.getMaxTemp(station),
      station.getMinTemp = stationAnalytics.getMaxTemp(station);
      station.geMaxPressure = stationAnalytics.getMaxTemp(station);
      station.geMinPressure = stationAnalytics.getMaxTemp(station);
      station.geMaxWindSpeed = stationAnalytics.getMaxTemp(station);
      station.geMinWindSpeed = stationAnalytics.getMaxTemp(station);
      station.windTrend = stationAnalytics.getMaxTemp(station);
      station.pressureTrend = stationAnalytics.getMaxTemp(station);
      station.tempTrend = stationAnalytics.getMaxTemp(station);
      station.getWeatherLatest = stationAnalytics.getMaxTemp(station);
      station.geWeatherIcon = stationAnalytics.getMaxTemp(station);
      station.celsiusToFahrenheit = stationAnalytics.getMaxTemp(station);
      station.windSpeedLatest = stationAnalytics.getMaxTemp(station);
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
