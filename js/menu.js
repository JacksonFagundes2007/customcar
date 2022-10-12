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


  // importa o carrosel
  document.querySelector('.second').insertAdjacentHTML('beforeend',`
  <p> id="models">Models</p>
  <div id="buttons">
    <a id="previous" class="cta-right btn-white" target="_self" href="#models">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271">
        <g stroke-width="1.5" transform="translate(-1624 -187.923)">
          <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" class="hexagon on-dark"></path>
          <path class="icon on-dark" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
        </g>
      </svg>
    </a>
    <a id="next" class="cta-right btn-white" target="_self" href="#models">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271">
        <g stroke-width="1.5" transform="translate(-1624 -187.923)">
          <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" class="hexagon on-dark"></path>
          <path class="icon on-dark" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
        </g>
      </svg>
    </a>
  </div>
  <div id="name-car">
    <p id="models-car"></p>
  </div>
  <div id="button-car">
    <a id="link-car" href=""><button id="open-car">open car configurator</button></a>
  </div>
  `)

    // importa o css do carrosel para celular
    body.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="style/carrosel-cell.css">')

} else {
  body.insertAdjacentHTML('afterbegin', `

  `)
    // importa o menu para pc
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

    // importa o carrosel
    document.querySelector('.second').insertAdjacentHTML('beforeend',`

      `)
  // importa o css do carrosel para celular

      body.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="style/carrosel.css">')
}