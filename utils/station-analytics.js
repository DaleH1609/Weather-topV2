"use strict";

const stationAnalytics = {

  getLatestTemp(station) {
    station = 'Tramore'
    let latestTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestTemp = station.readings[0].temp;
       }
    return 'bghnjk';
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