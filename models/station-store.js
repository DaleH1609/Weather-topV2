'use strict';

const _ = require('lodash');
const JsonStore = require("./json-store");

const stationStore = {
  store: new JsonStore("./models/station-store.json", {
    stationCollection: []
  }),
  collection: "stationCollection",

 getAllStations() {
   return this.store.findAll(this.collection);
  },
  
  removeAllStations(id){
    const readings =this,getStation(id)
    this.store.remove(this.collection,readings);
    this.store.save();
  },
  
  removeReading(id, readingId){
    const station = this.getStation(id);
    _.remove(station.readings, { id: readingId });
  },
  
   addStation(newStation) {
  this.store.add(this.collection, newStation);
  this.store.save();
  },
  
  removeStation(id){
    _.remove(this.stationCollection, { id: id });
  },
  
  getUserStations(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  addReading(id, reading) {
    const station = this.getStation(id);
    station.readings.push(reading);
  },
  
  getStation(id) {
    return _.find(this.stationCollection, { id: id });
  },
};

module.exports = stationStore;