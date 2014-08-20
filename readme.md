# dat-usgs-earthquakes

Import earthquakes into dat.

Bash import:
```
curl http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson 
| json-select "features.*" --lines
| jsonmap "var data = this.properties; data.coordinates = this.geometry.coordinates; data.key = this.id; return data" 
| dat import --json
```

## Source

Source: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php