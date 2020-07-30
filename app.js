/*
Vamos a crear un listado de alumnos.
  1 - Pedirle al usuario que ingrese un nombre
  2 - Almacenar el nombre del alumno
  3 - Consultarle si desea continuar ingresando.
    Si continua volver al punto 1. Si no, mostrar el listado completo de alumnos.
    */

/*
//inputs
let ingreseNombre, pregunta;
//lista de nombres en forma de array
let listaAlumnos = [];

do {
    //ingresa data
    ingreseNombre = prompt('Ingrese su nombre: ');
    //agrega data al array
    listaAlumnos.push(ingreseNombre);
    //pregunta si desea seguir (suma al array) si no
    pregunta = prompt('Desea Ingresar otro nombre?\n Responda si o no');
}
while (pregunta == 'si');


alert('La lista de alumnos es: ' + listaAlumnos.join(' '));


--------------

*/
/* Vamos a crear un programa que "depure" datos de entrada: 
    1- Solicitar al usuario que ingrese 10 valores (bucle) y guardarlos en un arreglo. Al finalizar, Mostrar el arreglo.
    2- Recorrer el arreglo (bucle) y crear (push) dos con el siguiente criterio:
        * Un arreglo que contenga los numeros
        * Un arreglo que contenga los textos
        Al finalizar, mostrar los 3 arreglos
    3 (extra) - Si no ingresa valor, GUARDAR el dato en el origen pero no colocarlo ni en el arreglo de textos ni en el arreglo de los numeros
    Como herramientas pueden utilizar las siguientes:
    isNaN , parseInt , push , arr.length y prompt
*/

let ingreseDato;
let ingresoUsuarioVacio = [];
let ingresoUsuarioNumero = [];
let ingresoUsuarioTexto = [];


for (let i = 0; i < 10; i++) {
    ingreseDato = prompt('Ingrese 10 valores');
    // ingresoUsuario.push(ingreseDato);

    if (isNaN(ingreseDato)) {
        ingresoUsuarioTexto.push(ingreseDato)
    } else if (!isNaN(ingreseDato) && ingreseDato !== '') {
        ingresoUsuarioNumero.push(ingreseDato);
    } else if (ingreseDato == '' || ingreseDato == null) {
        ingresoUsuarioVacio.push(ingreseDato + ' ')
    }
}


console.log('Texto: ' + ingresoUsuarioTexto);
console.log('Numero: ' + ingresoUsuarioNumero);
console.log('Dato Vacio: ' + ingresoUsuarioVacio);

