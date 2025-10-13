

"use strict"//modo estricto
var argumento="hola";
const word="mundo";
console.log("Hola roy");
console.log("cambios en hola.js");
console.log(123,"numero", true);
console.log("mas"+"cambios"+"en hola.js");

var height;
height = 5;
let weight = 70;
let palabra = "hola";
// var puede ser reasignada mientras que let no

palabra = palabra+height;


console.log(palabra);
palabra=palabra+weight;
console.log(palabra);


let step=4;
{
    var globalVar="global var";
    //var no respeta ambito de bloque

}

console.log(globalVar);

function testVar(){
    var localVar= "local var";
    let letVar="let var";
    console.log(letVar);
    console.log(localVar);
}

testVar("argumento var");

let x=1;
{
    let x=2;
    console.log(x);
}
console.log(x);
//shadowing sirve para crear variables con el mismo nombre en diferentes ambitos



console.log(palabrahoisting);
var palabrahoisting="hola hoisting";
//hoisting eleva las declaraciones de variables al inicio del ambito
//pero solo si es con var, no con let o const

let a;
console.log(a);
a=2;
