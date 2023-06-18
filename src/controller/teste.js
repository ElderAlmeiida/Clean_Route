
    
    
    var map = L.map('map').setView([-12.2597, -38.9639], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var rotaInicialInput = L.DomUtil.get('rotaInicial');
    
    var paradasInput = L.DomUtil.get('paradas');
    var rotaFinalInput = L.DomUtil.get('rotaFinal');

    var rotaInicialSearchControl = L.Control.geocoder({
      placeholder: 'Digite a rota inicial...',
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);
    rotaInicialSearchControl.on('markgeocode', function (e) {
      rotaInicialInput.value = e.geocode.properties.label;
    });

    var paradasSearchControl = L.Control.geocoder({
      placeholder: 'Digite as paradas...',
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);
    paradasSearchControl.on('markgeocode', function (e) {
      if (paradasInput.value === '') {
        paradasInput.value += e.geocode.properties.label;
      } else {
        paradasInput.value += ', ' + e.geocode.properties.label;
      }
    });

    var rotaFinalSearchControl = L.Control.geocoder({
      placeholder: 'Digite a rota final...',
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);
    rotaFinalSearchControl.on('markgeocode', function (e) {
      rotaFinalInput.value = e.geocode.properties.label;
    });

    function definirRota() {
      var funcionario = document.getElementById('funcionario').value;
      var veiculo = document.getElementById('veiculo').value;
      var rotaInicial = document.getElementById('rotaInicial').value;
      var paradas = document.getElementById('paradas').value;
      var rotaFinal = document.getElementById('rotaFinal').value;
    
      var routeTableBody = document.querySelector('#routeTable tbody');
      var newRow = routeTableBody.insertRow();
      var id = 'CR' + generateRandomLetters(3) + generateSequentialNumber();
      newRow.setAttribute('data-id', id);
    
      var idCell = newRow.insertCell();
      idCell.textContent = id;
    
      var funcionarioCell = newRow.insertCell();
      funcionarioCell.textContent = funcionario;
    
      var veiculoCell = newRow.insertCell();
      veiculoCell.textContent = veiculo;
    
      var rotaInicialCell = newRow.insertCell();
      rotaInicialCell.textContent = rotaInicial;
    
      var paradasCell = newRow.insertCell();
      paradasCell.textContent = paradas;
    
      var rotaFinalCell = newRow.insertCell();
      rotaFinalCell.textContent = rotaFinal;
    
      var editarCell = newRow.insertCell();
      var editarButton = document.createElement('button');
      editarButton.textContent = 'Editar';
      editarButton.addEventListener('click', function() {
        editarRota(id);
      });
      editarCell.appendChild(editarButton);
    
      var excluirCell = newRow.insertCell();
      var excluirButton = document.createElement('button');
      excluirButton.textContent = 'Excluir';
      excluirButton.addEventListener('click', function() {
        excluirRota(id);
      });
      excluirCell.appendChild(excluirButton);
    
      // Adicione aqui o código para marcar os pontos no mapa com base nos endereços da tabela
    
      console.log('Funcionário:', funcionario);
      console.log('Veículo:', veiculo);
      console.log('Rota Inicial:', rotaInicial);
      console.log('Paradas:', paradas);
      console.log('Rota Final:', rotaFinal);
    }
    
    function editarRota(id) {
      var funcionarioCell = document.querySelector('tr[data-id="' + id + '"] td:nth-child(2)');
      var veiculoCell = document.querySelector('tr[data-id="' + id + '"] td:nth-child(3)');
      var rotaInicialCell = document.querySelector('tr[data-id="' + id + '"] td:nth-child(4)');
      var paradasCell = document.querySelector('tr[data-id="' + id + '"] td:nth-child(5)');
      var rotaFinalCell = document.querySelector('tr[data-id="' + id + '"] td:nth-child(6)');
    
      var novoFuncionario = prompt('Digite o novo funcionário:', funcionarioCell.textContent);
      var novoVeiculo = prompt('Digite o novo veículo:', veiculoCell.textContent);
      var novaRotaInicial = prompt('Digite a nova rota inicial:', rotaInicialCell.textContent);
      var novasParadas = prompt('Digite as novas paradas:', paradasCell.textContent);
      var novaRotaFinal = prompt('Digite a nova rota final:', rotaFinalCell.textContent);
    
      funcionarioCell.textContent = novoFuncionario;
      veiculoCell.textContent = novoVeiculo;
      rotaInicialCell.textContent = novaRotaInicial;
      paradasCell.textContent = novasParadas;
      rotaFinalCell.textContent = novaRotaFinal;
    
      console.log('Rota com ID', id, 'foi editada.');
    }
    
    function excluirRota(id) {
      var row = document.querySelector('tr[data-id="' + id + '"]');
      if (row) {
        row.remove();
        console.log('Rota com ID', id, 'foi excluída.');
      }
    }
    

    function generateRandomLetters(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    function generateSequentialNumber() {
      if (typeof generateSequentialNumber.counter === 'undefined') {
        generateSequentialNumber.counter = 1;
      }
      return generateSequentialNumber.counter++;
    }


    
    // Obtém a string JSON armazenada no localStorage
const veiculosString = localStorage.getItem('veiculos');

// Verifica se existem dados de veículos no localStorage
if (veiculosString) {
  // Converte a string JSON em um array de objetos
  const veiculos = JSON.parse(veiculosString);

  // Obtém o elemento select pelo seu ID
  const veiculoSelect = document.getElementById('veiculo');

  // Itera sobre cada veículo e adiciona uma opção ao select
  veiculos.forEach((veiculo) => {
    const modelo = veiculo.modelo;

    // Cria um elemento <option> e define o valor e texto do modelo
    const option = document.createElement('option');
    option.value = modelo;
    option.textContent = modelo;

    // Adiciona a opção ao select
    veiculoSelect.appendChild(option);
  });
}

const funcionariosString = localStorage.getItem('funcionarios');

// Verifica se existem dados de funcionários no localStorage
if (funcionariosString) {
  // Converte a string JSON em um array de objetos
  const funcionarios = JSON.parse(funcionariosString);

  // Obtém o elemento select pelo seu ID
  const funcionarioSelect = document.getElementById('funcionario');

  // Itera sobre cada funcionário e adiciona uma opção ao select
  funcionarios.forEach((funcionario) => {
    const name = funcionario.name;

    // Cria um elemento <option> e define o valor e texto do name
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;

    // Adiciona a opção ao select
    funcionarioSelect.appendChild(option);
  });
}
  