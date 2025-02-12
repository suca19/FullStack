console.log('Hello World');

let name = ' Carlos';
const age = 30;
var isDeveloper = true; 

//-Comentario ----->
const nombre = 'Carlitos';

const new_nombre = nombre.toUpperCase();

console.log(new_nombre);

//list with push
const list = []
list.push(157);
const anotherList = list.concat[1];

console.log(list[0]);

console.log(anotherList);

const persona = {
    name: 'Carlos',
    twitter: '@carlos',
    age: 21,
    isDeveloper: true,
    links: ['https://carlos.com', 'https://carlitos.com']
}

console.log(persona.name);
console.log(persona.links[1]);

//
const field = 'twitter';
console.log(persona[field]);

//Functions
const sum = (number1, number2) => {
console.log(number1);
console.log(number2);
return number1 + number2;
}

console.log(sum(6,9));
function rest (firstNumber, secondNUmber) {
    return firstNumber - secondNUmber;
}
console.log(rest(10, 3));