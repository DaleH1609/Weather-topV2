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
  
   chillLatest(station) {
    let windSpeed = station.readings[station.readings.length-1].windspeed;
    let cTemp = station.readings[station.readings.length-1].temp;
    let chillLatest = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
     const  chillLatest = ((13.12 + (0.6215 * cTemp) - (11.37 * (Math.pow(windSpeed, 0.16)) + 0.3965 * cTemp + (Math.pow(windSpeed,0.16));
       }
    return chillLatest;
  },
  
  getMinTemp(station){
  let minTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      minTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp < minTemp.temp) {
          minTemp = station.readings[i];
        }
      }
    }
    return minTemp;
  },
  
  getMaxTemp(station){
  let maxTemp = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp > maxTemp.temp) {
          maxTemp = station.readings[i];
        }
      }
    }
    return maxTemp;
  },
  
  getMaxPressure(station){
  let maxPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      maxPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp > maxPressure.temp) {
          maxPressure = station.readings[i];
        }
      }
    }
    return maxPressure;
  },
  
  getMinPressure(station){
  let minPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      minPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp < minPressure.temp) {
          minPressure = station.readings[i];
        }
      }
    }
    return minPressure;
  },
  
  getMinWindspeed(station){
  let minWindspeed = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      minWindspeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windspeed < minWindspeed.windspeed) {
          minWindspeed = station.readings[i];
        }
      }
    }
    return minWindspeed;
  },
  
  getMaxWindspeed(station){
  let maxWindspeed = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0) {
      maxWindspeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windspeed > maxWindspeed.windspeed) {
          maxWindspeed = station.readings[i];
        }
      }
    }
    return maxWindspeed;
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

  getLatestPressure(station) {
    let latestPressure = null;
    if (station != undefined &&
      station.readings != undefined &&
      station.readings.length > 0){
       latestPressure = station.readings[station.readings.length-1].pressure;
       }
    return latestPressure;
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
  
  windTrend(station){
   if(station != undefined &&
      station.readings != undefined &&
      station.readings.length >= 3){
    let Trend1 = station.readings[station.readings.length-1].windspeed;
    let Trend2 = station.readings[station.readings.length-2].windspeed;
    let Trend3 = station.readings[station.readings.length-3].windspeed;
    if(Trend1 > Trend2 && Trend2 > Trend3){
      return "arrow up icon";
    }
    else if(Trend1 < Trend2 && Trend2 < Trend3){
      return "arrow down icon";
    }
    else{
      return "arrows alternate horizontal icon";
    }
   }
 },
  
  pressureTrend(station){
   if(station != undefined &&
      station.readings != undefined &&
      station.readings.length >= 3){
    let Trend1 = station.readings[station.readings.length-1].pressure;
    let Trend2 = station.readings[station.readings.length-2].pressure;
    let Trend3 = station.readings[station.readings.length-3].pressure;
    if(Trend1 > Trend2 && Trend2 > Trend3){
      return "arrow up icon";
    }
    else if(Trend1 < Trend2 && Trend2 < Trend3){
      return "arrow down icon";
    }
    else{
      return "arrows alternate horizontal icon";
    }
   }
 },
  
  TempTrend(station){
   if(station != undefined &&
      station.readings != undefined &&
      station.readings.length >= 3){
    let Trend1 = station.readings[station.readings.length-1].temp;
    let Trend2 = station.readings[station.readings.length-2].temp;
    let Trend3 = station.readings[station.readings.length-3].temp;
    if(Trend1 > Trend2 && Trend2 > Trend3){
      return "arrow up icon";
    }
    else if(Trend1 < Trend2 && Trend2 < Trend3){
      return "arrow down icon";
    }
    else{
      return "arrows alternate horizontal icon";
    }
   }
 }
};




module.exports = stationAnalytics;
  