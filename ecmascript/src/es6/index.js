function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || '32';
    var country = country || 'MX';
    console.log(name, age, country);

}


//es6

function newFunction2(name ='oscar', age = '32', country= 'MX'){
console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello ="Hello";
let world = "world";
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = `quiero escribir una frase epica

ahora es otra frase epica`;

console.log(lorem);


let person = {
    'name' : 'oscar',
    'age' : 32,
    'country': 'MX'
}
console.log(person.name,person.age);



let {name, age,country} = person
console.log(name, age,country);

//

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);


//

let name = 'Oscar';
let age = 19;
obj = {name: name, age: age};

obj2 = {name, age};
console.log(obj2);


//

const names = [
    {name: 'Nara', age:19}
    {name: 'Yesica', age: 27}
]

let listOfNames =names.map(function(item){
    console.log(item.name);
});


//Promesa

const helloPromise = () => {
    return new Promise ((resolve, reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then (() => console.log('Hola'))
.catch(error => console.log(error));

//

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;

    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


//

import {hello} from './module';
hello();


function* helloWorld() {
    if (true){
        yield 'Hello '; 
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);