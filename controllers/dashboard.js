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
    for (let i = 0; i < getAllStations.length; i++){
      const station = getAllStations[i];
      station.latestTemp = stationAnalytics.getLatestTemp(station);
      station.latestPressure = stationAnalytics.getLatestPressure(station);
      station.celsiusToFahrenheit = stationAnalytics.celsiusToFahrenheit(station);
      station.windSpeedLatest = stationAnalytics.windSpeedLatest(station);
      station.windCompass = stationAnalytics.windCompass(station);
      station.getMinTemp = stationAnalytics.getMinTemp(station);
      station.getMaxTemp = stationAnalytics.getMaxTemp(station);
      station.getMaxPressure = stationAnalytics.getMaxPressure(station);
      station.getMinPressure = stationAnalytics.getMinPressure(station);
      station.getMaxWindspeed = stationAnalytics.getMaxWindspeed(station);
      station.getMinWindspeed = stationAnalytics.getMinWindspeed(station);
      station.chillLatest = stationAnalytics.chillLatest(station);
      station.windTrend = stationAnalytics.windTrend(station);
      station.tempTrend = stationAnalytics.tempTrend(station);
      station.pressureTrend = stationAnalytics.pressureTrend(station);
      station.weatherIcon = stationAnalytics.weatherIcon(station);
      station.weatherLatest = stationAnalytics.weatherLatest(station);
    }
    const viewData = {
      title: "Weather Top Dashboard",
      stations: stations
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
