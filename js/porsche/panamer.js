let black = document.querySelector('#black');
let white = document.querySelector('#white');
let ametistametalico = document.querySelector('#ametistametalico');
let papapiametalico = document.querySelector('#papapiametalico');


black.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Black/iris.jpg";
    document.getElementById('imageDois').src = ".../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Black/iris (2).jpg";
    document.getElementById('imageTres').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Black/iris (1).jpg";
})

white.addEventListener('click', ()=>{
        document.getElementById('imageUm').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris.jpg";
        document.getElementById('imageDois').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris (2).jpg";
        document.getElementById('imageTres').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/white/iris (1).jpg";
})

ametistametalico.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris (2).jpg";
    document.getElementById('imageDois').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Ametista_Metalico/iris.jpg";
})

papapiametalico.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris (3).jpg";
    document.getElementById('imageDois').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/Panamera 4 E-Hybrid Platinum Edition (2023)/Papapia_Metalico/iris.jpg";
})