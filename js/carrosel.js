let um = document.querySelector('#um');
let dois = document.querySelector('#dois');
let tres = document.querySelector('#tres');
let quatro = document.querySelector('#quatro')

let previous = document.querySelector('#previous');
let next = document.querySelector('#next');

let p = document.querySelector('#models-car');
let link = document.querySelector('#link-car');

if(window.onload = true) {
    dois.classList = 'front'
    tres.classList = 'front'
    quatro.classList = 'front'
    p.innerHTML = 'panamera 4 e-hybrid'
    link.href = 'pages/panamera.html'
}

let cont = 0;

next.addEventListener('click', () => {
    if(cont == 0) {
        um.classList = 'back'
        dois.classList = 'mid'
        cont++
        p.innerHTML = 'macan gts'
        link.href = 'pages/macangts.html'
        console.log(cont);
    } else if (cont == 1) {
        dois.classList = 'back'
        tres.classList = 'mid'
        cont++
        p.innerHTML = 'gt3 rs'
        link.href = 'pages/gt3rs.html'
        console.log(cont);

    } else if (cont == 2) {
        tres.classList = 'back'
        quatro.classList = 'mid'
        cont++
        p.innerHTML = 'taycan 4s'
        link.href = 'pages/taycan4s.html'
        console.log(cont);
    } else if (cont == 3) {
        um.classList = 'mid'
        dois.classList = 'front'
        tres.classList = 'front'
        quatro.classList = 'front'
        cont--
        cont--
        cont--
        p.innerHTML = 'panamera 4 e-hybrid'
        link.href = 'pages/panamera.html'
        console.log(cont);
    }
})

previous.addEventListener('click', () => {
    if (cont == 3) {
        quatro.classList = 'front'
        tres.classList = 'mid'
        cont--
        p.innerHTML = 'gt3 rs'
        link.href = 'pages/gt3rs.html'
        console.log(cont);
    }
    else if(cont == 2) {
        tres.classList = 'front'
        dois.classList = 'mid'
        cont--
        p.innerHTML = 'macan gts'
        link.href = 'pages/macangts.html'
        console.log(cont);

    } else if (cont == 1) {
        dois.classList = 'front'
        um.classList = 'mid'
        cont--
        p.innerHTML = 'panamera 4 e-hybrid'
        link.href = 'pages/panamera.html'
        console.log(cont);

    } else if (cont == 0) {
        um.classList = 'back'
        dois.classList = 'back'
        tres.classList = 'back'
        quatro.classList = 'mid'
        cont++
        cont++
        cont++
        p.innerHTML = 'taycan 4s'
        link.href = 'pages/taycan4s.html'
        console.log(cont);

    }
})