// cores
colorsList = ["black","white","ametistametalico","papapiametalico"]

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
let ametistametalico = document.querySelector('#ametistametalico');
let papapiametalico = document.querySelector('#papapiametalico');


black.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/black/iris.jpg";
    document.querySelector('#dois').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/black/iris (2).jpg";
    document.querySelector('#tres').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/black/iris (1).jpg";
})

white.addEventListener('click', ()=>{
        document.querySelector('#um').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris.jpg";
        document.querySelector('#dois').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris (2).jpg";
        document.querySelector('#tres').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris (1).jpg";
})

ametistametalico.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris (2).jpg";
    document.querySelector('#dois').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris.jpg";
})

papapiametalico.addEventListener('click', ()=>{
    document.querySelector('#um').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris (3).jpg";
    document.querySelector('#dois').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris (1).jpg";
    document.querySelector('#tres').src = "../../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris.jpg";
})