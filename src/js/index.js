var map = L.map('map').setView([51.505, -0.09], 13); //! map html tarafındaki map olmak zorunda.
                                                    //* setView([enlem, boylam], zoomSeviyesi)

var baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //* baseMap haritaya (map'e) eklendi

//* marker oluşturuldu
var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    