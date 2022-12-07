let list = ["Porsche","Aston","Audi","Bentley","Bmw","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Citroen","Corvette","Dodge","Ferrari","Fiat","Ford","Genesis","Hyundai","Jaguar","Jeep","Kia","Koenigsegg","Lamborghini","Lexus","Maseratti","Mazda","Mclarem","Mercedez","Mini","Mitsubishi","Nissan","Pagani","Peugeot","Renault","Rollsroyce","Subaru","Suzuki","Tesla","Toyota","Volkswagen","Volvo","Mansory"]

let Porsche = ["Panamera", "Taycan 4S", "GT3 RS", "Macan GTS"]

const select = document.querySelector('#brand-select');
const model = document.querySelector("#model-select")

let off = document.createAttribute("disable")

for (let i = 0; i < list.length; i++) {
    select.options[select.options.length] = new Option(`${list[i]}`, `${list[i]}`)
}


    for (let j = 0; j < Porsche.length; j++) {
        console.log("test");
        
        model.options[model.options.length] = new Option(`${Porsche[j]}`, `${Porsche[j]}`)
    }
