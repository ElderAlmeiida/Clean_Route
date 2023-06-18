// Personalizar css no mapa
let myCustomColourUser = 'background-color: red;'
const markerHtml = `
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 3px solid #FFFFFF;`

// Coordenadas do Ponta A - Táxi
const coordTaxi = [-11.732997565990585, -61.78596675395966];
// Coordenadas do Ponta B - Usuário
const coordUser = [-11.73094, -61.7925];

// Iniciar o mapa com coordenadas do ponto A
const map = L.map('map').setView(coordTaxi, 40);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);


// Personalizar Ponto na mapa com imagem do táxi.
const taxiIcon = L.icon({
    className: "taxi-pointers",
    iconUrl: 'taxi.png',
    iconSize: [45, 45]
})
const marker = L.marker(coordTaxi, { icon: taxiIcon }).addTo(map);

function startService () {
    // Array de coordenadas. Simula o táxi enviando a localização para o APP.
    const latlng = [
        { lat: -11.733, lng: -61.78595 },
        { lat: -11.73379, lng: -61.78597 },
        { lat: -11.73379, lng: -61.78597 },
        { lat: -11.73381, lng: -61.78605 },
        { lat: -11.73383, lng: -61.78613 },
        { lat: -11.7338, lng: -61.78649 },
        { lat: -11.7338, lng: -61.78659 },
        { lat: -11.73383, lng: -61.78687 },
        { lat: -11.7338, lng: -61.78715 },
        { lat: -11.7338, lng: -61.78724 },
        { lat: -11.73381, lng: -61.78808 },
        { lat: -11.7338, lng: -61.79009 },
        { lat: -11.73378, lng: -61.79223 },
        { lat: -11.73378, lng: -61.79223 },
        { lat: -11.73291, lng: -61.79224 },
        { lat: -11.73291, lng: -61.79224 },
        { lat: -11.7328, lng: -61.79223 },
        { lat: -11.73279, lng: -61.79303 },
        { lat: -11.73279, lng: -61.79303 },
        { lat: -11.73094, lng: -61.79298 },
        { lat: -11.73094, lng: -61.79298 },
        { lat: -11.73094, lng: -61.7925 }
    ]

   // Personalizar Ponto na mapa com imagem do Usuário.
    const icon = L.divIcon({
        className: "pointers",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtml}${myCustomColourUser}" />`
    })
    var newMarker = L.marker([coordUser[0], coordUser[1]], { icon }).addTo(map);

    // Identifica a melhor rota para iniciar a viagem.
    L.Routing.control({
        waypoints: [
            L.latLng(coordTaxi[0], coordTaxi[1]),
            L.latLng(coordUser[0], coordUser[1])
        ]
    }).on('routesfound', function (e) {
        // Loop de coordenadas. Simula o táxi enviando a localização para o APP.
        latlng.forEach(function (coord, index) {
            setTimeout(function () {
                marker.setLatLng([coord.lat, coord.lng]);
                // Identifica o final da viagem.
                if (coord.lat === coordUser[0] && coord.lng === coordUser[1]) {
                   // alert('Seu táxi acabou de chegar!')
                }
            }, 1000 * index)
        })

    }).addTo(map);
};

startService()



document.getElementById("formRota").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    let cr_id_rota = document.getElementById("cr_id_rota").value;
    let cr_funcionario = document.getElementById("cr_funcionario").value;
    let cr_veiculo = document.getElementById("cr_veiculo").value;
    let cr_inicio_da_rota = document.getElementById("cr_inicio_da_rota").value;
    let cr_paradas = document.getElementById("cr_paradas").value;
    let cr_rota_final = document.getElementById("cr_rota_final").value;

    // Criar objeto rota
    let rota = {
      cr_id_rota: cr_id_rota,
      cr_funcionario: cr_funcionario,
      cr_veiculo: cr_veiculo,
      cr_inicio_da_rota: cr_inicio_da_rota,
      cr_paradas: cr_paradas,
      cr_rota_final: cr_rota_final
    };

    // Criar elemento div para exibir a rota na lista
    let rotaDiv = document.createElement("div");
    rotaDiv.textContent = JSON.stringify(rota);

    // Adicionar a div à lista de rotas
    document.getElementById("listaRotas").appendChild(rotaDiv);

    // Limpar os campos do formulário
    document.getElementById("formRota").reset();
  });