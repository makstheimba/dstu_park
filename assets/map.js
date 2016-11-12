window.onload = function () {
    var parkMap = L.map('map', {measureControl: true}).setView([47.24075, 39.710655], 17),
        tileURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attrib = "Map data © <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors",
        mapCenter = parkMap.getCenter().toString().match(/\(([^()]+)\)/)[1];
    
    L.tileLayer(tileURL, {
        attribution: attrib,
        maxZoom: 18
    }).addTo(parkMap);
    
    L.marker().setLatLng([47.23931, 39.7111]).bindPopup("Храм святой мученицы Татианы").addTo(parkMap);
    L.marker().setLatLng([47.23938, 39.70915]).bindPopup("Стадион ДГТУ").addTo(parkMap);
    L.marker().setLatLng([47.24207, 39.71151]).bindPopup("Множество деревьев").addTo(parkMap);
    L.marker().setLatLng([47.240230, 39.711274]).bindPopup("Детская площадка").addTo(parkMap);
    
    L.control.mousePosition({emptyString: mapCenter, separator: ", "}).addTo(parkMap);
};