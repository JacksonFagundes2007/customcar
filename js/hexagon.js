let button = document.querySelectorAll('.btn-white');
let hexagon = document.querySelectorAll('.hexagon');
let icon = document.querySelectorAll('.icon');

for(let i = 0; i<3; i++) {
    button[i].addEventListener('mouseover', () => {
        hexagon[i].style.fill = 'var(--color-white)'
        icon[i].style.stroke = 'var(--color-black)'
    })
    button[i].addEventListener('mouseout', () => {
        hexagon[i].style.fill = 'transparent'
        icon[i].style.stroke = '#fff'
    })
}


let previoubtn = document.querySelector('#previous').style.transform = 'scaleX(-1)'