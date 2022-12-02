let div = document.querySelector("#content-brand")

div.insertAdjacentHTML('beforebegin', '<p class="topic-white">Marcas com qual trabalhamos (fazendo ainda meu querido...)</p>')

const list = ["aston","audi","Bentley","bmw","Bugatti","buick","cadillac","chevrolet","chrysler","citroen","corvette","dodge","ferrari","fiat","ford","genesis","hyundai","jaguar","jeep","kia","koenigsegg","lamborghini","lexus","maseratti","mazda","mclarem","mercedez","mini","mitsubishi","nissan","pagani","peugeot","porsche","renault","rollsroyce","subaru","suzuki","tesla","toyota","volkswagen","volvo"]



for(i = 0; i < list.length; i++) {
    div.insertAdjacentHTML('beforeend', `
        <img class="icon-brand" src="images/icons/${list[i]}.png" alt="">
    `)
}