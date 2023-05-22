import '/css/style.css';
import cr_logo from '/logo.svg';
import cr_instagram from '/instagram.svg';
import cr_youtube from '/youtube.svg';


document.querySelector('#app').innerHTML = `


   <header class=" flex  items-center gap-36">
    <a class=" img_logo p-4" href="/src/view/cr_homepage.html"> <img src=" ${cr_logo}" alt="" srcset=""></a>
    <ul class="grid grid-flow-col gap-[102.41px] text-white text-[2.25rem] ">
      <li><a href="/src/view/cr_Rotas.html"> Rotas </a></li>
      <li><a href=""> Veiculos </a></li>
      <li><a href=""> Funcionários </a></li>
      <li><a href=""> Caixa </a></li>
    </ul>

    <ul class="grid grid-flow-col text-white text-[2.25rem] gap-6 items-center ">
    <li><a href="./cr_login"> Login </a> </li>

    <li><a href="https://www.instagram.com.br"> <img src=" ${cr_instagram}" alt="" srcset=""></a></li>
    <li><a href="https://www.youtube.com.br"> <img src=" ${cr_youtube}" alt="" srcset=""></a></li>
  </ul>
 
  </header>
    
  



`

//setupCounter(document.querySelector('#counter'))
