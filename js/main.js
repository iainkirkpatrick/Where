var map = L.mapbox.map('map', 'envintage.map-29de0vu0')
//var map = L.mapbox.map('map', 'mapbox.natural-earth-2')
    .setView([-37.687796999999996, 176.16513], 6);

var geojsonLayer = new L.GeoJSON();

function loadGeoJson(data) { 
    geojson.addGeoJSON(data); 
} 

var geoJsonUrl = "http://wfs.data.linz.govt.nz/790b96c2acc54595bcc2129d5860de70/v/x319/wfs?service=WFS&request=GetFeature&typeName=v:x319&MAXFEATURES=3&outputFormat=JSON"; 

$.ajax({ 
    url: geoJsonUrl, 
    dataType: 'json' 
}); 
  
map.addLayer(geojsonLayer);