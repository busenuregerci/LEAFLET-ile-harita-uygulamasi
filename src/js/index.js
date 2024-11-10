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

var cordList1 = [[38,32],[38,33],[39,27]];
var çizgi1 = L.polyline(cordList1).addTo(map);


cordList1.push([39,34]);
var polygon1 = L.polygon(cordList1).addTo(map);

var bbox = polygon1.getBounds(); //* haritaya ekleninen poligonun bounce değeri alınır ve haritaya fitBounce denildiğinde bizim çerçevelediğimiz çerçeve içerisine haritayı ortalamaya çalışır ve odaklar.
map.fitBounds(bbox);
    