var mymap = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);


function getColor(d) {
    return d > 90  ? '#800026' :
           d > 70  ? '#BD0026' :
           d > 50  ? '#E31A1C' :
           d > 30  ? '#FC4E2A' :
           d > 10   ? '#FD8D3C' :
           d > -10   ? '#FEB24C' :
                      '#FFEDA0';
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 30, 50, 70, 90],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' km<br>' : '+ km');
    }
    return div;
};


legend.addTo(mymap);

var geojsonLayer = L.geoJson().addTo(mymap);

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        onEachFeature: function (feature, layer) {
            var depth = feature.geometry.coordinates[2];
            var magnitude = feature.properties.mag;
            layer.bindPopup("Magnitude: " + magnitude +
                "<br>Depth: " + depth + 
                "<br>Location: " + feature.properties.place);
            layer.setStyle({
                fillColor: getColor(depth),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
            layer.setRadius(magnitude * 4); // Adjust multiplier as needed for visualization
        }
    }).addTo(mymap);
});

