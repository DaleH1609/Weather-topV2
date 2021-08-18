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
  }
};

module.exports = stationAnalytics;