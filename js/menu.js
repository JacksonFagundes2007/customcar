let largura = window.screen.width;

let body = document.querySelector('body');
let menu_pc = document.querySelector('#menu-pc');

if(largura < 700) {
  // desativa o menu de pc
  menu_pc.style.background = "transparent"
  // muda a classe da div para a div do menu
  document.querySelector('.wrapper-fake').classList = 'wrapper';

  // insere o menu fora do wrapper
  body.insertAdjacentHTML('afterbegin', `
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
  `)
  // insere o menu dentro do wrapper
  document.querySelector('.wrapper').innerHTML = `
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  `



} else {
    // importa o menu para pc
    document.querySelector('#menu-pc').innerHTML = `
    <img class="logo-jj" src="images/page/jj-custom-car.png" alt="Logo"></img>
    <ul>
    <li><a class="link-item" href="index.html">Home</a></li>
    <li><a class="link-item" href="#models">Models</a></li>
      <li><a class="link-item" href="pages-site/budget.html">Budget</a></li>
      <li><a class="link-item" href="index.html">Contact</a></li>
      <li><a class="link-item" href="pages-site/aboutus.html">About us</a></li>
    </ul>
    `
}