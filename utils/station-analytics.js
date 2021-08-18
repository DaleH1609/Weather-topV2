"use strict";

const stationAnalytics = {

  getLatestTemp(station) {
    let latestTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestTemp = station.readings[station.reading.size - 1].temp;
       }
    return latestTemp;
  },
  
  getLatestPressure(station) {
    let latestPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestPressure = station.readings[station.reading.size - 1].pressure;
       }
    return latestPressure;
  }
};

module.exports = stationAnalytics;