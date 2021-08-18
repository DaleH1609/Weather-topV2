"use strict";

const stationAnalytics = {

  getLatestTemp(station) {
    let latestTemp = null;
    if(station.readings.length > 0){
       latestTemp = station.readings[station.readings.size - 1].temp;
       }
    return latestTemp;
  }
};

module.exports = stationAnalytics;