var map = L.map('map').setView([41.00827163916992, 28.966947820848873], 15); //! map html tarafındaki map olmak zorunda.
                                                    //* setView([enlem, boylam], zoomSeviyesi)

//* tıklanılan noktanın enlem ve boylam bilgilerini alma
map.on('click', function(e){
    //debugger;
    var noktamız = e.latlng;
    alert("Enlem: "+ noktamız.lat+ " Boylam: "+ noktamız.lng )
})

var googleBaseMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution : "Proje 1",
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

googleBaseMap.addTo(map);

var turkeyBounds = [
    [42, 26],  // Türkiye'nin kuzeybatı köşesi (yaklaşık olarak)
    [36, 45]   // Türkiye'nin güneydoğu köşesi (yaklaşık olarak)
];

// Kırmızı stil tanımlaması
var redStyle = {
    color: "red",
    weight: 2,
    fillColor: "red",
    fillOpacity: 0.2  
};


var rectangle = L.rectangle(turkeyBounds, redStyle).addTo(map);


// Haritanın odak noktasını dikdörtgenin sınırlarına ayarla
map.fitBounds(rectangle.getBounds());


// var baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map); //* baseMap haritaya (map'e) eklendi

// //* marker oluşturuldu
// var marker = L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();


// var nokta1 = L.marker([38,32]).addTo(map);

// nokta1.on('click', function(e){
//     debugger;
// })

var stil = {
    stroke: true,
    color: "#8e44ad",
    weight:10,
    opacity: 0.7,
    lineCap: "butt",
    lineJoin: "round",
    dashArray:"10 20 10 5"
}

var cordList1 = [[38,32],[38,33],[39,27]];
// var çizgi1 = L.polyline(cordList1,stil).addTo(map);
// çizgi1.on('click', function(e){
//     debugger;
// })

// var stil2 = {
//     color: "#d35400",
//     weight:5,
//     dashArray:"10 20",
//     fill: true,
//     fillColor: "#1abc9c",
//     fillOpacity: 0.4
// }
// var stil2_1 = {
//     color: "#d35400",
//     weight:5,
//     dashArray:"10 20",
//     fill: true,
//     fillColor: "#ffb8b8",
//     fillOpacity: 0.4
// }

cordList1.push([39,34]);
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

// Stil tanımlamaları
var stil2 = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.6
};

var stil2_1 = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.8
};

var stil3 = {
    color: 'white',
    fillColor: 'white',
    fillOpacity: 1,
    weight: 5
};

var polygon1 = L.polyline(hilalDisKor, stil2).addTo(map);  // Dış hilal şekli
var polygon2 = L.polyline(hilalIcKor, stil3).addTo(map);   // İç hilal şekli

// // Vurgulama olayları
// polygon1.on('mouseover', function(e) {
//     e.target.setStyle(stil2_1);  // Dış hilal vurgulama stili
// });

// polygon1.on('mouseout', function(e) {
//     e.target.setStyle(stil2);    // Dış hilal orijinal stili
// });

var starCoords = [
    [40.019201307686785 , 34.77172851562501],      
    [38.34596449365382 , 34.01916503906251]  
   
];
var starStyle = {
    color: "white",
    weight: 5
};

// Yıldız poligon olarak haritaya eklenir
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


//var bbox = polygon1.getBounds(); //* haritaya ekleninen poligonun bounce değeri alınır ve haritaya fitBounce denildiğinde bizim çerçevelediğimiz çerçeve içerisine haritayı ortalamaya çalışır ve odaklar.
//map.fitBounds(bbox2);

//* harita üstünde dikdörtgen oluşumu
var board = [[1,1],[9,2]];
//var rectangle = L.rectangle(board).addTo(map);
//var bbox2 = rectangle.getBounds();
//map.fitBounds(bbox2);

// var stil3 = {
//     color: "#c0392b",
//     fill: true,
//     fillColor: "#2ecc71",
//     fillOpacity: 1
// };
stil3.radius = 20;
//* circle oluşumu
var merkez = [41.00827163916992, 28.966947820848873];
var circle = L.circle(merkez,stil3).addTo(map);
// var bbox2 = circle.getBounds();
// map.fitBounds(circle);
circle.on('click', function(e){
    //debugger;
    var cember = e.target;
    cember.setRadius(50)
})

//* circle marker oluşturulması
// var merkez2 = [41.00827163916992, 28.966947820848873];
// var nokta = L.circleMarker(merkez2, {radius: 5}).addTo(map); 
// var bbox2 = nokta.getBounds(); //! burada çıkan console hatası circle markerın aslında getBounds metoduna sahip olmamasından kaynaklı. getBounds metodu rectangles, and circles için uygundur.
// //map.fitBounds(bbox2);
