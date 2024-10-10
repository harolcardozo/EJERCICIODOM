//* es la manera de invocar los elementos del html al js mediante un document

//CON EL QUERYSELECTOR CON UN . SE INVOCA LA CLASE Y CON UN # EL ID

/*
let elemento = document; 

elemento = document.head;

console.log(elemento); 


let elementow = window; 

console.log(`elemento de windows ${elementow}`); */

/*
let elementoE = document.styleSheets; 

console.log (elementoE);*/


// por ID se vincula con getElementById

/*
let elementoId = document.getElementById("contenido");
console.log(elementoId);
*/


//la forma mas comun de acceder a un documente html es por medio de un ID
/*
let opId1 = document.getElementById ("p1");
opId1.innerHTML = "javaScript";   

let opId2 = document.getElementById ("p2");
opId2.innerHTML = "kotlin";    

let opId3 = document.getElementById ("p3");
opId3.innerHTML = "c++";    */

//getElementsByClassName es un metodo de js que se utiliza para selecconar todos los elementos de un documnento html 
/*
let elementoClase = document.getElementsByClassName('lista');
console.log(elementoClase); */


//getElementsByTagName es un metodo de js que se utiliza para seleccionar todos los elementos de html que tiene un nombre de etiqueta en especifico

/*
let elementotag  = document.getElementsByTagName('h2');
console.log(elementotag);
*/

/*
let elementoQ = document.querySelector('ul');
//muestra la cantidad de las listas con children
console.log(elementoQ.children);

// muestra las posiciones de cada lista 
console.log(elementoQ.children[0]);


// muestra el retonor de la primera lista
console.log(elementoQ.firstElementChild);

//retorna la ultima lista
console.log(elementoQ.lastElementChild);
*/
/*
let elementoP = document.getElementsByTagName('p');
console.log(elementoP.length);

for(let i = 0; i< elementoP.length; i++){
    console.log(elementoP[i].textContent);
}

// modfica el contenido del parrafo segun lo especificado  en este caso es el 2
elementoP[2].innerHTML = "prueba"; 

*/

// eventos del mouse se establece la funcion que se dio en el html 


// ver fecha 

function verfecha(){

    let fec = document.getElementById('resultado');
    fec.innerHTML = Date();
}

// quitar fecha 

// se le da fecha al final para que quede en el estado inicial del parrafo 
function quitarfecha(){

let Qfecha = document.getElementById('resultado');
Qfecha.innerHTML = "fecha";

}




function temperatura(){
 
let numero = parseFloat(document.getElementById('dato1').value);

let calculo = numero-273.5

let res1 = document.getElementById('res');
res1.innerHTML = (`resultado: ${calculo}`);


alert(`La conversion es:${calculo}`);

}

