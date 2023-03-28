let numero = parseInt(prompt("Ingrese un numero"));

let resultado = numero % 2 == 0
switch (resultado) {
    case true:
        console.log("El numero es par");
        break;
    default:
        console.log("El numero es impar")
        break;
}