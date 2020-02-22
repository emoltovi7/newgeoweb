var layerAirports;
var urlAirports = "datos/airports.geojson";

function addDatosAirports() {

    layerAirports  = new L.GeoJSON.AJAX(urlAirports, {
            onEachFeature: function (feature, layer) {

                var tipo;
                switch(feature.properties.TIPUSCONST){
                    case "balloonport": tipo="Aeropuerto para globo";break;
                    case "closed":tipo="Aeropuerto cerrado";break;
                    case "heliport":tipo="Helipuerto";break;
                    case "large_airport":tipo="Aeropuerto grande";break;
                    case "medium_airport":tipo="Aeropuerto mediano";break;
                    case "seaplane_base":tipo="Aeropuerto para hidroaviones";break; 
                    case "small_airport":tipo="Aeropuerto pequeño";break; 
                    default: tipo="Sin descripción";
                };

                popupContent = "<b>Tipo:" + feature.properties.type + "</b>"+
                "<br>Nombre:" + feature.properties.name +
                ".Continente: " + feature.properties.continent +
                " País:" + feature.properties.iso_country + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                var fcolor;
                switch(feature.properties.TIPUSCONST){
                    case "balloonport":fcolor="#FF7605";break;
                    case "closed":fcolor="#FFE805";break;
                    case "heliport":fcolor="#007834";break;
                    case "large_airport":fcolor="#016166";break;
                    case "medium_airport":fcolor="#39109F";break;
                    case "seaplane_base":fcolor="#8A0298";break; 
                    case "small_airport":fcolor="#D7002E";break;
                    default: fcolor="#ffffff";
                };

                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: fcolor,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        map.setView([41.399733,2.168598],3);
        controlCapas.addOverlay(layerAirports,"Airports");

}