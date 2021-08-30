"use strict"

const logger = require("../utils/logger");
const stationStore = require('../models/station-store.js');
const accounts = require ('./accounts.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    const stationId = request.params.id;
    logger.info("dashboard rendering");
    const getAllStations = stationStore.getAllStations();
    const loggedInUser = accounts.getCurrentUser(request);
    const stations = stationStore.getUserStations(loggedInUser.id);
    
    for (let i =0; i < allStations.length; i++){
      const station = allStations[i];
      station.getMaxTemp
      station.getMinTemp
      station.geMaxPressure
      station.geMinPressure
      station.geMaxWindSpeed
      station.geMinWindSpeed
      station.windTrend
      station.pressureTrend
      station.tempTrend
      station.getWeatherLatest
      station.geWeatherIcon
      station.celsiusToFahrenheit
      station.windSpeedLatest
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
