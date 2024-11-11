var map = L.map('map').setView([41.00827163916992, 28.966947820848873], 15); //! map html tarafındaki map olmak zorunda.
                                                    //* setView([enlem, boylam], zoomSeviyesi)

var googleBaseMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution : "Proje 1",
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

googleBaseMap.addTo(map);


// var baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map); //* baseMap haritaya (map'e) eklendi

// //* marker oluşturuldu
// var marker = L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();


var nokta1 = L.marker([38,32]).addTo(map);

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
var çizgi1 = L.polyline(cordList1,stil).addTo(map);

var stil2 = {
    color: "#d35400",
    weight:5,
    dashArray:"10 20",
    fill: true,
    fillColor: "#1abc9c",
    fillOpacity: 0.4
}

cordList1.push([39,34]);
var polygon1 = L.polygon(cordList1,stil2).addTo(map);

//var bbox = polygon1.getBounds(); //* haritaya ekleninen poligonun bounce değeri alınır ve haritaya fitBounce denildiğinde bizim çerçevelediğimiz çerçeve içerisine haritayı ortalamaya çalışır ve odaklar.
//map.fitBounds(bbox2);

//* harita üstünde dikdörtgen oluşumu
var board = [[1,1],[9,2]];
var rectangle = L.rectangle(board).addTo(map);
//var bbox2 = rectangle.getBounds();
//map.fitBounds(bbox2);

var stil3 = {
    color: "#c0392b",
    fill: false,
};
stil3.radius = 20;
//* circle oluşumu
var merkez = [41.00827163916992, 28.966947820848873];
var circle = L.circle(merkez,stil3).addTo(map);
// var bbox2 = circle.getBounds();
// map.fitBounds(circle);

//* circle marker oluşturulması
var merkez2 = [41.00827163916992, 28.966947820848873];
var nokta = L.circleMarker(merkez2, {radius: 5}).addTo(map); 
var bbox2 = nokta.getBounds(); //! burada çıkan console hatası circle markerın aslında getBounds metoduna sahip olmamasından kaynaklı. getBounds metodu rectangles, and circles için uygundur.
map.fitBounds(bbox2);
    