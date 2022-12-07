let largura = window.screen.width;

let body = document.querySelector('body');
let menu_pc = document.querySelector('#menu-pc');


document.querySelector('#menu-pc').innerHTML = `
  <img class="logo-jj" src="../../images/page/jj-custom-car.png" alt="Logo"></img>
  <ul>
  <li><a class="link-item" href="../../index.html">Home</a></li>
    <li><a class="link-item" href="../../pages-site/budget.html">Budget</a></li>
    <li><a class="link-item" href="../../pages-site/contact.html">Contact</a></li>
    <li><a class="link-item" href="../../pages-site/aboutus.html">About us</a></li>
  </ul>
`

let logo  = document.querySelector('.logo-jj')

logo.addEventListener('click', ()=> {
  menu_pc.classList.toggle = "menu-off"
})