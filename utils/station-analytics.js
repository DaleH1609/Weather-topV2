"use strict";

const stationStore = require('../models/station-store.json');

const stationAnalytics = {

  getLatestTemp(station) {
    console.log('3£33333333333')
    console.log(station)
    if (station == '01'){
      station =1
    }
    if (station == '00'){
      station = 0
    }
    console.log(stationStore.stationCollection[0].title['Dunmore'])
  
    let latestTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestTemp = station.readings[0].temp;
       }
    return stationStore;
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
  