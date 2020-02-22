var layerAirports;
var urlAirports = "datos/airports.geojson";

function addDatosAirports() {

    layerAirports  = new L.GeoJSON.AJAX(urlAirports, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>" + feature.properties.type + "</b>"+
                "<br>" + feature.properties.name +
                ". " + feature.properties.continent +
                " " + feature.properties.iso_country + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        map.setView([41.399733,2.168598],3);
        controlCapas.addOverlay(layerAirports,"Airports");

}