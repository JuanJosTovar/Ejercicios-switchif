let numero = parseInt(prompt("Ingrese un numero entre 1 y 15"));

switch (numero) {
    case 1:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
    case 12:
    case 14:
    case 15:
        console.log("El numero no es primo");
        break;
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
        console.log("El numero es primo");
        break;
    default:
        console.log("El numero ingresado no se encuentra dentro del rango");
        break;
}