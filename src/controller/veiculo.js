function getFormValues() {
    var placa = document.getElementById('placa').value;
    var modelo = document.getElementById('modelo').value;
    var marca = document.getElementById('marca').value;
    var estado = document.getElementById('estado').value;
    var lugares = document.getElementById('lugares').value;
  
    return {
      placa: placa,
      modelo: modelo,
      marca: marca,
      estado: estado,
      lugares: lugares
    };
  }
  
  function saveData(data) {
    var veiculos = localStorage.getItem('veiculos');
    if (veiculos) {
      veiculos = JSON.parse(veiculos);
    } else {
      veiculos = [];
    }
  
    veiculos.push(data);
  
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
  }
  
  function populateTable() {
    var veiculos = localStorage.getItem('veiculos');
    if (veiculos) {
      veiculos = JSON.parse(veiculos);
    } else {
      veiculos = [];
    }
  
    var tableBody = document.querySelector('#routeTable tbody');
    tableBody.innerHTML = '';
  
    veiculos.forEach(function(veiculo, index) {
      var row = document.createElement('tr');
  
      var idCell = document.createElement('td');
      idCell.textContent = index + 1;
      row.appendChild(idCell);
  
      var placaCell = document.createElement('td');
      placaCell.textContent = veiculo.placa;
      row.appendChild(placaCell);
  
      var modeloCell = document.createElement('td');
      modeloCell.textContent = veiculo.modelo;
      row.appendChild(modeloCell);
  
      var marcaCell = document.createElement('td');
      marcaCell.textContent = veiculo.marca;
      row.appendChild(marcaCell);
  
      var estadoCell = document.createElement('td');
      estadoCell.textContent = veiculo.estado;
      row.appendChild(estadoCell);
  
      var lugaresCell = document.createElement('td');
      lugaresCell.textContent = veiculo.lugares;
      row.appendChild(lugaresCell);
  
      var editCell = document.createElement('td');
      editCell.innerHTML = '<button onclick="editVeiculo(' + index + ')">Editar</button>';
      row.appendChild(editCell);
  
      var deleteCell = document.createElement('td');
      deleteCell.innerHTML = '<button onclick="deleteVeiculo(' + index + ')">Excluir</button>';
      row.appendChild(deleteCell);
  
      tableBody.appendChild(row);
    });
  }
  
  function salvarDados() {
    var formValues = getFormValues();
    saveData(formValues);
    populateTable();
  }
  
  populateTable();
  