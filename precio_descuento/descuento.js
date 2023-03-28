let valorProducto = parseFloat(prompt("Ingrese el precio del producto"));
let valorDescuento = parseFloat(prompt("Ingrese el valor del descuento"));

if (valorDescuento > 0 && valorDescuento <= 100){
    op = valorProducto * valorDescuento / 100;
    precioFinal = valorProducto - op;
    console.log("El valor del producto con el descuent es ",precioFinal)

} else 
    console.log("Ingrese un descuento valido")