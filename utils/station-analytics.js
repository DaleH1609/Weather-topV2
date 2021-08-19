"use strict";

const stationAnalytics = {

  getLatestTemp(station) {
    let lowestTemp = null;
    if (station.readings.length > 0) {
      lowestTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp < lowestTemp.temp) {
          lowestTemp = station.readings[i];
        }
      }
    }
    return lowestTemp;
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
  