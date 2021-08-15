'use strict';

const _ = require('lodash');

const stationStore = {

stationCollection: require('./station-store.json').stationCollection,

 getAllStations() {
    return this.stationCollection;
  },
  
  removeReading(id, readingId){
    const station = this.getStation(id);
    _.remove(station.readings, { id: readingId });
  },
  
  removeStation(id){
    _.remove(this.stationCollection, { id: id });
  },
  
  addSong(id, reading) {
    const station = this.getStation(id);
    station.reading.push(reading);
  },
  
  getStation(id) {
    return _.find(this.stationCollection, { id: id });
  },
};

module.exports = stationStore;