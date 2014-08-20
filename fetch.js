var request = require('request')
var select = require('JSONStream').parse
var through = require('through2').obj
var ldj = require('ldjson-stream')

module.exports = function () {
  var stream = 
  request('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
  .pipe(select('features.*'))
  .pipe(through(function (o, enc, next) {
    var data = o.properties
    data.coordinates = o.geometry.coordinates
    data.key = o.id
    next(null, data)
  }))
  .pipe(ldj.serialize())
  
  return stream 
}
