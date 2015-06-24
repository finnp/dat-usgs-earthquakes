# dat-usgs-earthquakes

Import earthquakes into dat.


## Install

You should have dat globally installed `npm install dat -g`.
```
git clone https://github.com/finnp/dat-usgs-earthquakes.git
cd dat-usgs-earthquakes
dat init
```

## Import data

You can import data using `gasket.json`, so you can do:

```
npm install gasket -g
npm run import
```

Which expands to  something like:
```
curl http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson
| json-select "features.*" --lines
| jsonmap "var data = this.properties; data.coordinates = this.geometry.coordinates; data.key = this.id; return data"
| dat import -d usgs-earthquakes -
```

## Source

Source: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
