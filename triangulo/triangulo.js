let angulo1 = parseFloat(prompt("ingrese el primer angulo"))
let angulo2 = parseFloat(prompt("ingrese el segundo angulo"))
let angulo3 = parseFloat(prompt("ingrese un tercer angulo angulo"))

let triangulo = angulo1 + angulo2 + angulo3;

switch (triangulo) {
    case 180:
        console.log("La suma de los angulos corresponden a un triangulo");
        break;
    default:
        console.log("Los angulos no corresponden a un triangulo");       
        break;
}