//primero ingresamos los nros, hasta que se ingrese un numero -1, el cual no vamos a contar para nuestro calculo
// function ingresaNros() {
    
//     var numero = parseInt(prompt("Introduzca un numero: (Si desea detener, ingrese -1)"));
//     console.log(numero);
// }

// ingresaNros();
let i = 0;
let array = [];
let acumulador = 0;
while(true) {
    var numero = parseInt(prompt("Introduzca un numero: (Si desea detener, ingrese -1)"));
    if(numero != -1) {
        array[i] = numero;
        acumulador  = acumulador + numero;
    }

    else
        break;

    i++;
}

alert(`Valor maximo: ${Math.max.apply(null, array)}
    Valor minimo:  ${Math.min.apply(null, array)}
    Valor promedio: ${acumulador/(array.length)}
    Nro total ingresados: ${array.length} 
    Valor acumulado: ${acumulador}`);


