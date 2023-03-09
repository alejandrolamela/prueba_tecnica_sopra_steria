// 1. Escriba un algoritmo que lea un número entero y determine si es par o impar. Si es par,
// que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero. Si
// es impar, que escriba todos los impares de manera descendiente desde si sí mismo
// hasta el uno. Utilice la instrucción LEER NUMERO al inicio del programa para cargar un
// número en la variable NUMERO.

let numero = prompt("Escribe número entero:");

if (numero%2===0) {
    console.log('el numero es par entonces:');
    for (let index = numero; index>=0; index-=2) {

    console.log(index);

}
} else{
    console.log('es impar y sus números impares son:');
    for (let index = numero; index >= 1; index-=2) {
        console.log(index);

    }
}

// 2. Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo.
// Deberá mostrar los siguientes resultados:
// a. Cantidad de personas mayores de edad (18 años o más).
// b. Cantidad de personas menores de edad.
// c. Cantidad de personas masculinas mayores de edad.
// d. Cantidad de personas femeninas menores de edad.
// e. Porcentaje que representan las personas mayores de edad respecto al total de
// personas.
// f. Porcentaje que representan las mujeres respecto al total de personas.
// Utilice la instrucción LEER PERSONAS al inicio del programa para cargar los datos de las
// 50 personas en un variable, PERSONAS, que actúa como un vector de 50 posiciones.
// Cada elemento de PERSONAS es de un tipo estructurado que dispone dos campos:
// SEXO y EDAD.

let personas = [];

for (let index = 0; index < 50; index++) {
  let element = {
    edad: prompt("Ponga la edad:"),
    genero: prompt("Es masculino o femenino:"),
  };
  personas.push(element);
}

console.log(personas);

let mayores18 = 0;
let menores = 0;
let mayoresMasc = 0;
let femMenores = 0;
let mujeresTotales = 0;

for (let index = 0; index < 50; index++) {
  if (personas[index].edad >= 18) {
    mayores18++;
    if (personas[index].sexo === "masc") {
      mayoresMasc++;
    }
  } else {
    menores++;
    if (personas[index].sexo === "fem") {
      femMenores++;
    }
  }
  if (personas[index].sexo === "fem") {
    mujeresTotales++;
  }
}

let porcentajeMayor18 = (mayores18 / 50) * 100;
let porcentajeFem = (mujeresTotales / 50) * 100;

console.log(`Totales mayores de edad son ${mayores18}`);
console.log(`Totales menores de edad son ${menores}`);
console.log(`Totales mayores hombres son  ${mayoresMasc}`);
console.log(`Totales mujeres menores ${femMenores}`);
console.log(`Porcentaje de mayores ${porcentajeMayor18}%`);
console.log(`Porcentaje de mujeres  ${porcentajeFem}%`);

// Desarrolle un algoritmo para el cálculo del salario de un trabajador. El importe
// liquidado (sueldo) depende de una tarifa o precio por hora establecida y de un
// condicionante sobre las horas trabajadas: si la cantidad de horas trabajadas es mayor a
// 40 horas, la tarifa se incrementa en un 50% para las horas extras. Calcular el sueldo
// recibido por el trabajador en base las horas trabajadas y la tarifa. Utilice las
// instrucciones LEER HORASTRABAJADAS y LEER TARIFA al inicio del programa para
// cargar los valores en las variables HORASTRABAJADAS y TARIFA.


let horasTotales = prompt("horas trabajadas:");
let tarifa = prompt("sueldo/hora:");


let sueldoBase = horasTotales * tarifa;


let horasExtras = 0;
let sueldoHorasExtras = 0;
if (horasTotales > 40) {
  horasExtras = horasTotales - 40;
  sueldoHorasExtras = horasExtras * (tarifa * 1.5);
}


let sueldoTotal = sueldoBase + sueldoHorasExtras;


console.log(`Horas trabajadas: ${horasTotales}`);
console.log(`Precio/hora $${tarifa}`);
console.log(`Sueldo base: $${sueldoBase}`);
console.log(`Horas extras: ${horasExtras}`);
console.log(`Sueldo total: $${sueldoTotal}`);
console.log(`Sueldo por horas extras: $${sueldoHorasExtras}`);

