// cores
colorsList = ["black","white","metallicblue","miamiblue"]

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
let metallicblue = document.querySelector('#metallicblue');
let miamiblue = document.querySelector('#miamiblue');


black.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Macan GTS 2023/black/iris.jpg";
    document.querySelector('#dois').src = "../../images/cars/Macan GTS 2023/black/iris (2).jpg";
    document.querySelector('#tres').src = "../../images/cars/Macan GTS 2023/black/iris (3).jpg";
    document.querySelector('#quatro').src = "../../images/cars/Macan GTS 2023/black/iris (1).jpg";
})

white.addEventListener('click', ()=>{
        document.querySelector('#um').src ="../../images/cars/Macan GTS 2023/white/iris (4).jpg";
        document.querySelector('#dois').src = "..././images/cars/Macan GTS 2023/white/iris (1).jpg";
        document.querySelector('#tres').src = "../../images/cars/Macan GTS 2023/white/iris (2).jpg";
        document.querySelector('#quatro').src = "../../images/cars/Macan GTS 2023/white/iris.jpg";
})

metallicblue.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Macan GTS 2023/Metallic blue/iris (4).jpg";
    document.querySelector('#dois').src = "../../images/cars/Macan GTS 2023/Metallic blue/iris (1).jpg";
    document.querySelector('#tres').src ="../../images/cars/Macan GTS 2023/Metallic blue/iris (2).jpg";
    document.querySelector('#quatro').src = "../../images/cars/Macan GTS 2023/Metallic blue/iris.jpg";
})

miamiblue.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Macan GTS 2023/Miami blue/iris (3).jpg";
    document.querySelector('#dois').src = "../../images/cars/Macan GTS 2023/Miami blue/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/Macan GTS 2023/Miami blue/iris (2).jpg";
    document.querySelector('#quatro').src = "../../images/cars/Macan GTS 2023/Miami blue/iris.jpg";
})