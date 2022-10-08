let black = document.querySelector('#black');
let white = document.querySelector('#white');
let metallicblue = document.querySelector('#metallicblue');
let miamiblue = document.querySelector('#miamiblue');


black.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Macan GTS 2023/black/iris.jpg";
    document.getElementById('imageDois').src = "../images/cars/Macan GTS 2023/black/iris (2).jpg";
    document.getElementById('imageTres').src = "../images/cars/Macan GTS 2023/black/iris (1).jpg";
    document.getElementById('imageQuatro').src = "../images/cars/Macan GTS 2023/black/iris (3).jpg";
})

white.addEventListener('click', ()=>{
        document.getElementById('imageUm').src ="../images/cars/Macan GTS 2023/white/iris (4).jpg";
        document.getElementById('imageDois').src = "../images/cars/Macan GTS 2023/white/iris (1).jpg";
        document.getElementById('imageTres').src = "../images/cars/Macan GTS 2023/white/iris (2).jpg";
        document.getElementById('imageQuatro').src = "../images/cars/Macan GTS 2023/white/iris.jpg";
})

metallicblue.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Macan GTS 2023/Metallic blue/iris (4).jpg";
    document.getElementById('imageDois').src = "../images/cars/Macan GTS 2023/Metallic blue/iris (1).jpg";
    document.getElementById('imageTres').src ="../images/cars/Macan GTS 2023/Metallic blue/iris (2).jpg";
    document.getElementById('imageQuatro').src = "../images/cars/Macan GTS 2023/Metallic blue/iris.jpg";
})

miamiblue.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/Macan GTS 2023/Miami blue/iris (3).jpg";
    document.getElementById('imageDois').src = "../images/cars/Macan GTS 2023/Miami blue/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/Macan GTS 2023/Miami blue/iris (2).jpg";
    document.getElementById('imageQuatro').src = "../images/cars/Macan GTS 2023/Miami blue/iris.jpg";
})