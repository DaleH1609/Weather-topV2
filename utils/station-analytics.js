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
  
  windCompass(station){
    let windCompass = station.readings[station.readings.length-1].winddirection;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
      if (windCompass >= 348.77 && windCompass <= 11.25){
        return 'North';
      }
      else if(windCompass > 11.25 && windCompass <= 33.75){
        return 'North North East'
      }
      else if(windCompass > 33.75 && windCompass <= 56.25){
        return 'North East'
      }
      else if(windCompass > 56.25 && windCompass <= 78.75){
        return 'East North East'
      }
      else if(windCompass > 78.75 && windCompass <= 101.25){
        return 'East'
      }
      else if(windCompass > 101.25 && windCompass <= 123.75){
        return 'East South East'
      }
      else if(windCompass > 123.75 && windCompass <= 146.25){
        return 'South East'
      }
      else if(windCompass > 146.25 && windCompass <= 168.75){
        return 'South South East'
      }
      else if(windCompass > 168.75 && windCompass <= 191.25){
        return 'South'
      }
      else if(windCompass > 191.25 && windCompass <= 213.75){
        return 'South South West'
      }
      else if(windCompass > 213.75 && windCompass <= 236.25){
        return 'South West'
      }
      else if(windCompass > 236.25 && windCompass <= 258.75){
        return 'West South West'
      }
      else if(windCompass > 258.75 && windCompass <= 281.25){
        return 'West'
      }
      else if(windCompass > 281.25 && windCompass <= 303.75){
        return 'West North West'
      }
      else if(windCompass > 303.75 && windCompass <= 326.25){
        return 'North West'
      }
      else if(windCompass > 326.25 && windCompass <= 348.75){
        return 'North North West'
      }
    }
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
  