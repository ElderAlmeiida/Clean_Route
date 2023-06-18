import '/css/style.css';
import cr_logo from '/logo.svg';
import cr_instagram from '/instagram.svg';
import cr_youtube from '/youtube.svg';


document.querySelector('#app').innerHTML = `

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/css/style.css">
</head>

<body class="bg-transparent">
  <nav class="flex items-center justify-between px-6 py-4 bg-transparent">
    <div class="flex items-center space-x-4">
      <a href="/src/view/cr_homepage.html">
        <img src="${cr_logo}" alt="Logo" class="">
      </a>
      </div>
      <div class="text-2xl font-inter">
        <ul class="flex space-x-10">
          <li class="underline-animation">
            <a href="/src/view/cr_Rotas.html" class="text-white ">Rotas</a>
          </li>
          <li class="underline-animation">
            <a href="/src/view/cr_veiculo.html" class="text-white ">Veículos</a>
          </li>
          <li class="underline-animation">
            <a href="/src/view/cr_funcionario.html" class="text-white ">Funcionários</a>
          </li>
          <li class="underline-animation">
            <a href="/src/view/cr_caixa.html" class="text-white ">Caixa</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center space-x-4 text-2xl font-inter">
      <div>
        <a href="/src/view/cr_login_cadastro.html" class="text-white hover:underline-animation">Login</a>
      </div>
      <div class="flex items-center space-x-2">
        <a href="../view/cr_homepage.html class=" hover:underline-animation">
          <img src="${cr_instagram}" alt="Instagram" class="w-8 h-8">
        </a>
        <a href="../view/cr_homepage.html" class=" hover:underline-animation">
          <img src="${cr_youtube}" alt="YouTube" class="w-8 h-8">
        </a>
      </div>
    </div>
  </nav>
</body>

</html>














`

