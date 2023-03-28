let salario = parseFloat(prompt("Ingrese salario"));
let categoria = prompt("Ingrese la categoria");

switch (categoria) {
    case "categoria1":
        console.log("Su aumento es ",salario + salario * 0.15);
        break;
    case "categoria2" :
        console.log("Su aumento es ", salario + salario * 0.25);
        break;
    case "categoria3":
        console.log("Su aumento es ", salario + salario * 0.45);
        break;
    default:
        console.log("Ingrese una categoria valida")
        break;
}