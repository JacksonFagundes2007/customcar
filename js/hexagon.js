// virar btn
let previoubtn = document.querySelector('#previous').style.transform = 'scaleX(-1)'


let button = document.querySelectorAll('.btn-white');
let button2 = document.querySelectorAll('.btn-white2');

let hexagon = document.querySelectorAll('.hexagon');
let hexagon2 = document.querySelectorAll('.hexagon2');
let icon = document.querySelectorAll('.icon');
let icon2 = document.querySelectorAll('.icon2');

for(let i = 0; i<button.length; i++) {
    button[i].addEventListener('mouseover', () => {
        hexagon[i].style.fill = 'var(--color-white)'
        icon[i].style.stroke = 'var(--color-black)'
    })
    button[i].addEventListener('mouseout', () => {
        hexagon[i].style.fill = 'transparent'
        icon[i].style.stroke = '#fff'
    })
}
for(let i = 0; i<button.length; i++) {
    button2[i].addEventListener('mouseover', () => {
        hexagon2[i].style.fill = 'var(--color-white)'
        icon2[i].style.stroke = 'var(--color-black)'
        icon2[i+1].style.stroke = 'var(--color-black)'
    })
    button2[i].addEventListener('mouseout', () => {
        hexagon2[i].style.fill = 'transparent'
        icon2[i].style.stroke = '#fff'
        icon2[i+1].style.stroke = '#fff'
    })
}
