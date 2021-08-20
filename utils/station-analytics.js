"use strict";

const stationAnalytics = {

  getLatestTemp(station) {
    let latestTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestTemp = station.readings[station.readings.length-1].temp;
       }
    return latestTemp;
  },
  
  celsiusToFahrenheit(station){
    let celsius = station.readings[station.readings.length-1].temp;
    if(station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
      celsius = celsius * 1.8 + 32;
    }
    return celsius;
  },

  
  getLatestPressure(station) {
    let latestPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestPressure = station.readings[station.readings.length-1].pressure;
       }
    return latestPressure;
  }
};

module.exports = stationAnalytics;
  