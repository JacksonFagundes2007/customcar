let largura = window.screen.width;

let body = document.querySelector('body');
let menu_pc = document.querySelector('#menu-pc');

if(largura < 900) {
  menu_pc.style.background = "transparent"
  document.querySelector('.wrapper-fake').classList = 'wrapper';

  body.insertAdjacentHTML('afterbegin', `
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
  `) 
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
  body.insertAdjacentHTML('afterbegin', `
  
  `)
    document.querySelector('#menu-pc').innerHTML = `
  
    <img class="logo-jj" src="images/page/jj-custom-car.png" alt="Logo"></img>
    <ul>
    <li><a class="link-item" href="index.html">Home</a></li>
    <li><a class="link-item" href="#models">Models</a></li>
      <li><a class="link-item" href="index.html">Budget</a></li>
      <li><a class="link-item" href="index.html">Contact</a></li>
      <li><a class="link-item" href="index.html">About us</a></li>
    </ul>
    `
}