let largura = window.screen.width;

if(largura < 900) {
let body = document.querySelector('#menu-cell').innerHTML = `
<input type="checkbox" id="active">
<label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
<div class="wrapper">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Feedback</a></li>
  </ul>
</div>
`
} else {
    alert('se a tela for maior que 900px aperarece outro menu aqui')
}