// cores
colorsList = ["black","white","red","yellow"]

let menuCores = document.querySelector('#cores-car')

for (let i = 0; i < colorsList.length; i++) {
    menuCores.insertAdjacentHTML('afterbegin',`
    <button id="${colorsList[i]}" class="btn-color" id="${colorsList[i]}" ></button>
    `)
}

let btns = document.querySelectorAll('.btn-color')
for (let j = 0; j < btns.length; j++) {
    btns[j].style = `
        width: 50px;
        height: 50px;
        border: 1px solid rgb(175, 175, 175);
        cursor: pointer;
    `
}

// color select
let black = document.querySelector('#black');
let white = document.querySelector('#white');
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');


black.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/GT3 RS 2023/black/iris (4).jpg";
    document.querySelector('#dois').src = "../../images/cars/GT3 RS 2023/black/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/GT3 RS 2023/black/iris.jpg";
    document.querySelector('#quatro').src = "../../images/cars/GT3 RS 2023/black/iris (2).jpg";
})

white.addEventListener('click', ()=>{
        document.querySelector('#um').src = "../../images/cars/GT3 RS 2023/white/iris.jpg";
        document.querySelector('#dois').src = "../../images/cars/GT3 RS 2023/white/iris (2).jpg";
        document.querySelector('#tres').src = "../../images/cars/GT3 RS 2023/white/iris (1).jpg";
        document.querySelector('#quatro').src = "../../images/cars/GT3 RS 2023/white/iris (3).jpg";
})

red.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/GT3 RS 2023/red/iris (3).jpg";
    document.querySelector('#dois').src = "../../images/cars/GT3 RS 2023/red/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/GT3 RS 2023/red/iris.jpg";
    document.querySelector('#quatro').src = "../../images/cars/GT3 RS 2023/red/iris (2).jpg";
})

yellow.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/GT3 RS 2023/yellow/iris (4).jpg";
    document.querySelector('#dois').src = "../../images/cars/GT3 RS 2023/yellow/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/GT3 RS 2023/yellow/iris.jpg";
    document.querySelector('#quatro').src = "../../images/cars/GT3 RS 2023/yellow/iris (2).jpg";
})

