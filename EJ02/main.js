
//PROBLEMA 02

while(true) {
var nombreAlumno = (prompt("Introduzca un nombre del alumno"));
        if(nombreAlumno == '') {
            alert(`Ok, Houston, we've had a problem here. Ingreso un nombre vacio. Vuelva a recargar la pagina para ingresar los datos correctamente. :D`);
            break;
        }
var notaPractica = parseInt(prompt("Introduzca nota practica", "0"));
        if(notaPractica < 0 || notaPractica > 10) {
            alert(`Ingresaste incorrectamente el valor. Verifica que la nota este entre 0 y 10. Por favor vuelve a recargar la pagina.`);
            break;
        }
var notaProblemas = parseInt(prompt("Introduzca nota de Problemas", "0"));
        if(notaProblemas < 0 || notaProblemas > 10) {
            alert(`Ingresaste incorrectamente el valor. Verifica que la nota este entre 0 y 10. Por favor vuelve a recargar la pagina.`);
            break;
        }
var notaTeorica = parseInt(prompt("Introduzca nota de Teoria", "0"));
        if(notaTeorica < 0 || notaTeorica > 10) {
            alert(`Ingresaste incorrectamente el valor. Verifica que la nota este entre 0 y 10. Por favor vuelve a recargar la pagina.`);
            break;
        }
var notaFinal = notaPractica*0.1 + notaProblemas*0.5 + notaTeorica*0.4;
   
    alert(`
    Nombre del alumno: ${nombreAlumno}
    Nota Practica: ${notaPractica}
    Nota Problemas: ${notaProblemas}
    Nota Teorica: ${notaTeorica}
    Nota Final: ${notaFinal}
`);
}



