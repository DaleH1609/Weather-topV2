"use strict"

const logger = require("../utils/logger");
const stationStore = require('../models/station-store.js');
const accounts = require ('./accounts.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    const stationId = request.params.id;
    const title = request.params.title;
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const getStationTitle = stationStore.getStationTitle(title);
    const stations = stationStore.getUserStations(loggedInUser.id);
    const viewData = {
      title: "Weather Top Dashboard",
      stations: stations.sort((a, b) => a.getStationTitle.localeCompare(b.getStationTitle))
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
