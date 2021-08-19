"use strict";

const stationStore = require('../models/station-store.json');

const stationAnalytics = {

  getLatestTemp(station) {
    let latestTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
     latestTemp = station.readings[station.reading.length - 1].temp;
       }
    return 5;
  },
  
  getLatestPressure(station) {
    let latestPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestPressure = station.readings[station.reading.length - 1].pressure;
       }
    return latestPressure;
  }
};

module.exports = stationAnalytics;
  