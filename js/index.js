    //CARRITO DE COMPRAS//
    let producto1 = parseInt(prompt("ingresa el valor del producto:"));
    let producto2 =parseInt(prompt("ingresa el valor de otro producto:"));

    let resultado= producto1+producto2;
    console.log("El total de ambos productos es :"+ resultado);
        
    //BUSCADOR//
    let producto = prompt("Busca tu producto:");

    if(producto == "portatermo"){
    console.log("Este producto se encuentra disponible");
    }
    if( producto == "mochila") {
    console.log("Este producto se encuentra disponible");
    }
    if( producto == "yerbero") {
    console.log("Este producto se encuentra disponible");
    }
    if( producto == "azucarero") {
    console.log("Este producto se encuentra disponible");
    }
    if( producto == "mate") {
    console.log("Este producto se encuentra disponible");
    }
    else{
    console.log("No se encontro producto")}

    //CANTIDAD DE COMPRA MAYORISTA (150u)

    for(let i = 1; i <= 150; i++){
    console.log("Tu total de productos es:", i)};


    let Precio = 20000
for(let i = 1; i <= 150;i++){

    resultado = Precio *i;
    console.log(Precio +"x"+ i + "=" + resultado); 
}

descuento = 20

function calcularPrecioFinal(precioOriginal, descuento) {

    let cantDescuento = (precioOriginal * descuento) / 100;
    // Calcula el precio final restando el descuento al precio original
    let precioFinal = precioOriginal - cantDescuento;
    // Retorna el precio final redondeado a dos decimales
    return precioFinal.toFixed(2); 
}
    let precioOriginal = parseFloat(prompt("Inserta el precio original del producto:"));

    let precioFinal = calcularPrecioFinal(precioOriginal, descuento);

// Muestra el precio final al usuario//
alert("El precio final del producto después de aplicar un descuento del " + descuento + "% es: " + precioFinal + " presos.");