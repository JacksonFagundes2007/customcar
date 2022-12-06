let list = ["porsche","aston","audi","Bentley","bmw","Bugatti","buick","cadillac","chevrolet","chrysler","citroen","corvette","dodge","ferrari","fiat","ford","genesis","hyundai","jaguar","jeep","kia","koenigsegg","lamborghini","lexus","maseratti","mazda","mclarem","mercedez","mini","mitsubishi","nissan","pagani","peugeot","renault","rollsroyce","subaru","suzuki","tesla","toyota","volkswagen","volvo","mansory"]

const select = document.querySelector('#brand-select');

for (let i = 0; i < list.length; i++) {
    console.log("test");
    
    select.options[select.options.length] = new Option(`${list[i]}`, `${list[i]}`);
}

