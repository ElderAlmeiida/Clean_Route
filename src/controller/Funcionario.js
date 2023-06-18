// Função para obter os valores dos inputs
function getFormValues() {
  var name = document.getElementById('name').value;
  var cnh = document.getElementById('cnh').value;
  var phone = document.getElementById('vehicle').value;
  var email = document.getElementById('rote').value;
  var password = document.getElementById('password').value;

  return {
    name: name,
    cnh: cnh,
    phone: phone,
    email: email,
    password: password
  };
}

// Função para salvar os dados no localStorage
function saveData(data) {
  // Verifica se já existem dados no localStorage
  var funcionarios = localStorage.getItem('funcionarios');
  if (funcionarios) {
    funcionarios = JSON.parse(funcionarios);
  } else {
    funcionarios = [];
  }

  // Adiciona o novo funcionário aos dados existentes
  funcionarios.push(data);

  // Armazena os dados atualizados no localStorage
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
}

// Função para preencher a tabela com os dados do localStorage
function populateTable() {
  var funcionarios = localStorage.getItem('funcionarios');
  if (funcionarios) {
    funcionarios = JSON.parse(funcionarios);
  } else {
    funcionarios = [];
  }

  var tableBody = document.querySelector('#routeTable tbody');
  tableBody.innerHTML = '';

  funcionarios.forEach(function (employee, index) {
    var row = document.createElement('tr');

    var idCell = document.createElement('td');
    idCell.textContent = index + 1;
    row.appendChild(idCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = employee.name;
    row.appendChild(nameCell);

    var cnhCell = document.createElement('td');
    cnhCell.textContent = employee.cnh;
    row.appendChild(cnhCell);

    var phoneCell = document.createElement('td');
    phoneCell.textContent = employee.phone;
    row.appendChild(phoneCell);

    var emailCell = document.createElement('td');
    emailCell.textContent = employee.email;
    row.appendChild(emailCell);

    var editCell = document.createElement('td');
    editCell.innerHTML = '<button onclick="editEmployee(' + index + ')">Editar</button>';
    row.appendChild(editCell);

    var deleteCell = document.createElement('td');
    deleteCell.innerHTML = '<button onclick="deleteEmployee(' + index + ')">Excluir</button>';
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

// Função para manipular o evento de clique no botão "Salvar"
function salvarDados() {
  var formValues = getFormValues();
  saveData(formValues);
  populateTable();
}

// Chamada inicial para preencher a tabela com os dados existentes
populateTable();
