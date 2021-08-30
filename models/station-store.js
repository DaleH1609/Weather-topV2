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
  
  removeAllStations(){
    this.store.removeAll(this.collection);
    this.store.save();
  },
  
  removeReading(id, readingId){
   const station = this.getStation(id);
    const readings = station.readings;
    _.remove(readings, { id: readingId });
    this.store.save();
  },
  
   addStation(newStation) {
  this.store.add(this.collection, newStation);
  this.store.save();
  },
  
  removeStation(id){
    const readings = this.getStation(id);
    this.store.remove(this.collection, readings);
    this.store.save();
  },
  
  getUserStations(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  addReading(id, reading) {
    const station = this.getStation(id);
    date: new Date().toISOString;
    station.readings.push(reading);
    this.store.save();
  },
  
  getStation(id) {
     return this.store.findOneBy(this.collection, { id: id })
  },
};

module.exports = stationStore;