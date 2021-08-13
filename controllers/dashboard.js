"use strict";

const logger = require("../utils/logger");
const stations = require('../models/station-store.js')

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weather Top Dashboard",
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
