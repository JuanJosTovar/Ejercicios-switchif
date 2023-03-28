let horasElaboradas = parseInt(prompt("Ingrese el numero de las horas"));
let valorDeHora  = parseInt(prompt("Ingrese el valor de la hora"));
let salario = valorDeHora * horasElaboradas

switch (!(horasElaboradas < 80)) {
    case (true):
        let bonificacion = salario * 0.40 + salario;
        console.log("Su salario con bonificacion es ",bonificacion);
        break;
    default:
        console.log("No incluye bonificacion su salario es de", salario);
        break;
}

