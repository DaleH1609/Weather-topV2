"use strict";

const logger = require("../utils/logger");
const stationStore = require('../models/station-store.js')

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weather Top Dashboard",
      station: stationStore.getAllStations(),
    };
    logger.info('about to render', stationStore.getAllStations)
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
