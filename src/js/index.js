
var map = L.map('map').setView([41.00827163916992, 28.966947820848873], 15); // Initialize the map

// Add Google base map layer
var googleBaseMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: "Proje 1",
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

// Add a rectangle showing Turkey's approximate boundaries
var turkeyBounds = [
    [42, 26],  // Northwest corner
    [36, 45]   // Southeast corner
];

var redStyle = {
    color: "red",
    weight: 2,
    fillColor: "red",
    fillOpacity: 0.2
};

var rectangle = L.rectangle(turkeyBounds, redStyle).addTo(map);
map.fitBounds(rectangle.getBounds()); // Center the map on the rectangle bounds

// Marker example
var marker1 = L.marker([39.93501296038254, 32.84912109375001]).addTo(map);

// Styling for polyline
var polylineStyle = {
    stroke: true,
    color: "#8e44ad",
    weight: 10,
    opacity: 0.7,
    lineCap: "butt",
    lineJoin: "round",
    dashArray: "10 20 10 5"
};

// Circle example
var circleStyle = {
    color: "white",
    fillColor: "white",
    fillOpacity: 1,
    weight: 5,
    radius: 20
};

var circle = L.circle([41.00827163916992, 28.966947820848873], circleStyle).addTo(map);
circle.on('click', function (e) {
    var cember = e.target;
    cember.setRadius(50); // Change circle radius on click
});

// Polygon examples
var hilalDisKor = [
    [40.65563874006118, 32.66235351562501],
    [39.80853604144591, 29.981689453125004],
    [38.28131307922966, 30.014648437500004],
    [37.30027528134433, 32.61840820312501]
];

var hilalIcKor = [
    [37.30027528134433, 32.61840820312501],
    [38.53527591154413, 30.536499023437504],
    [39.58029027440865, 30.503540039062504],
    [40.65563874006118, 32.66235351562501],
    [39.80853604144591, 29.981689453125004],
    [38.28131307922966, 30.014648437500004],
    [37.30027528134433, 32.61840820312501]
];

var hilalStyleOuter = { color: 'red', fillColor: 'red', fillOpacity: 0.6 };
var hilalStyleInner = { color: 'white', fillColor: 'white', fillOpacity: 1 };

L.polyline(hilalDisKor, hilalStyleOuter).addTo(map);
L.polyline(hilalIcKor, hilalStyleInner).addTo(map);

// Star shape using multiple polylines
var starCoords = [
    [40.019201307686785 , 34.77172851562501],      
    [38.34596449365382 , 34.01916503906251]  
   
];
var starStyle = {
    color: "white",
    weight: 5
};
var star = L.polyline(starCoords,starStyle).addTo(map);

var starCoords2 = [
    [40.019201307686785 , 34.77172851562501],
    [38.53097889440024 , 35.89233398437501]
]
var star2 = L.polyline(starCoords2,starStyle).addTo(map);

var starCoords3 = [
    [38.53097889440024 , 35.89233398437501],
    [39.42770738465604, 33.73901367187501]
]
var star3 = L.polyline(starCoords3,starStyle).addTo(map);

var starCoords4=[
    [39.42770738465604, 33.73901367187501],
    [39.554883059924016 , 35.82641601562501]
]
var star4 = L.polyline(starCoords4,starStyle).addTo(map);

var starCoords5=[
    [39.554883059924016 , 35.82641601562501],
    [38.34596449365382 , 34.01916503906251]  
]
var star5 = L.polyline(starCoords5,starStyle).addTo(map);

