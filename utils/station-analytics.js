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
  
  windSpeedLatest(station){
    let windSpeed = station.readings[station.readings.length-1].windspeed;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
      if (windSpeed <=1 ){
        return 0;
      }
     else if (windSpeed >1 && windSpeed <= 5){
        return 1;
      }
     else if (windSpeed >6 && windSpeed <= 11){
        return 2;
      }
     else if (windSpeed >12 && windSpeed <= 19){
        return 3;
      }
     else if (windSpeed >20 && windSpeed <= 28){
        return 4;
      }
     else if (windSpeed >29 && windSpeed <= 38){
        return 5;
      }
     else if (windSpeed >39 && windSpeed <= 49){
        return 6;
      }
     else if (windSpeed >58 && windSpeed <= 61){
        return 7;
      }
     else if (windSpeed >62 && windSpeed <= 74){
        return 8;
      }
     else if (windSpeed >75 && windSpeed <= 88){
        return 9;
      }
     else if (windSpeed >89 && windSpeed <= 102){
        return 10;
      }
      else
        return 11;
    }
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
  