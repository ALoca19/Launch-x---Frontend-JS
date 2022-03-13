var numero1;
numero1 = 4;
var numero2;
numero2= 2;
console.log(numero1);

var frase = "Comillas dobles";
var frase2 = 'comilla simple';
var frase3 = `Comilla invertida ${frase}`
console.log(frase3);

let listaNumeros = [2,3,5,7,11,234];
listaNumeros.push(16); //Mete un valor a la lista

console.log(listaNumeros.length); //numero de elementos

let explorar =
{
    nombre: "Nombre del explorer",
    email: "email@explorar.mx",
    mision: "FrontEnd",
    numReg: 1234,
    proyectos: ["Abogabot", "Taqueria", "Psteleria", "Vacunacion"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorar);
console.log(explorar.email);