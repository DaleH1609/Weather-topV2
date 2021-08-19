"use strict";

const stationStore = require('../models/station-store.json');

const stationAnalytics = {

  getLatestTemp(station) {
    let value = 2 ;
    console.log('3£33333333333')
    
    console.log(station)
    
    
    
   
    let latestTemp = (stationStore.stationCollection[0].readings[value].temp )
  
    //let latestTemp = null;
    //if (station != undefined &&
      //station.readings != undefined &&
      //station.readings.length > 0){
       //latestTemp = station.readings[0].temp;
       //}
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
  