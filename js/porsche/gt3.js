let black = document.querySelector('#black');
let white = document.querySelector('#white');
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');


black.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/GT3 RS 2023/black/iris (4).jpg";
    document.getElementById('imageDois').src = "../images/cars/GT3 RS 2023/black/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/GT3 RS 2023/black/iris.jpg";
    document.getElementById('imageQuatro').src = "../images/cars/GT3 RS 2023/black/iris (2).jpg";
})

white.addEventListener('click', ()=>{
        document.getElementById('imageUm').src = "../images/cars/GT3 RS 2023/white/iris.jpg";
        document.getElementById('imageDois').src = "../images/cars/GT3 RS 2023/white/iris (2).jpg";
        document.getElementById('imageTres').src = "../images/cars/GT3 RS 2023/white/iris (1).jpg";
        document.getElementById('imageQuatro').src = "../images/cars/GT3 RS 2023/white/iris (3).jpg";
})

red.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/GT3 RS 2023/red/iris (3).jpg";
    document.getElementById('imageDois').src = "../images/cars/GT3 RS 2023/red/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/GT3 RS 2023/red/iris.jpg";
    document.getElementById('imageQuatro').src = "../images/cars/GT3 RS 2023/red/iris (2).jpg";
})

yellow.addEventListener('click', ()=>{
    document.getElementById('imageUm').src = "../images/cars/GT3 RS 2023/yellow/iris (4).jpg";
    document.getElementById('imageDois').src = "../images/cars/GT3 RS 2023/yellow/iris (1).jpg";
    document.getElementById('imageTres').src = "../images/cars/GT3 RS 2023/yellow/iris.jpg";
    document.getElementById('imageQuatro').src = "../images/cars/GT3 RS 2023/yellow/iris (2).jpg";
})