# dat-usgs-earthquakes

Import earthquakes into dat.


## Install

You should have dat globally installed `dat install dat -g`.
```
git clone https://github.com/finnp/dat-usgs-earthquakes.git
cd dat-usgs-earthquakes
npm install --no-optional # optional dependency is dat
dat listen
```

## Shell Way

To import by hand do something like
```
curl http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson 
| json-select "features.*" --lines
| jsonmap "var data = this.properties; data.coordinates = this.geometry.coordinates; data.key = this.id; return data" 
| dat import --json
```
I also provided this as a `gasket.json`, so you can do `gasket run import` as well.

## Source

Source: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php