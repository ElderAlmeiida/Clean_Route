
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}



const registrationForm = document.getElementById('registration-form');
const tableBody = document.querySelector('#routeTable tbody');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const cnpj = document.getElementById('cnpj_r').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email_comercial').value;
    const senha = document.getElementById('senha_r').value;

    if (cnpj && telefone && email) {
        const newCliente = {
            id: Date.now(),
            cnpj,
            telefone,
            email,
            senha
            
        };

        let cliente = JSON.parse(localStorage.getItem('cliente')) || [];
        cliente.push(newCliente);
        localStorage.setItem('cliente', JSON.stringify(cliente));

        generateTableRows();
        alert('Cadastro feito com sucesso!');
        registrationForm.reset();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
});

function generateTableRows() {
    tableBody.innerHTML = '';

    const cliente = JSON.parse(localStorage.getItem('cliente')) || [];

    cliente.forEach(function (cliente) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-4">${cliente.id}</td>
            <td class="py-2 px-4">${cliente.cnpj}</td>
            <td class="py-2 px-4">${cliente.telefone}</td>
            <td class="py-2 px-4">${cliente.email}</td>
            <td class="py-2 px-4">Editar</td>
            <td class="py-2 px-4">Excluir</td>
        `;

        tableBody.appendChild(row);
    });
}

generateTableRows();



