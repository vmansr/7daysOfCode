let numOne = 1;
let stringOne = '1';
let numThirty = 30;
let stringThirty = '30';
let numTen = 10;
let stringTen = '10';

if (numOne == stringOne) {
  document.write('Las variables numOne y stringOne tienen el mismo valor, pero tipos diferentes.<br>')
} else {
  document.write('Las variables numOne y stringOne no tienen el mismo valor.<br>')
}

if (numThirty === stringThirty) {
  document.write('Las variables numThirty y stringThirty tienen el mismo valor y el mismo tipo.<br>')
} else {
  document.write('Las variables numThirty y stringThirty no tienen el mismo tipo.<br>')
}

if (numTen == stringTen) {
  document.write('Las variables numTen y stringTen tienen el mismo valor, pero tipos diferentes')
} else {
  document.write('Las variables numTen y stringTen no tienen el mismo valor')
}

/*Observaciones:
En JavaScript, la comparación se realiza con operadores específicos. Por ejemplo, 
para comparar si dos valores son iguales estrcitos, debemos usar el operador de igualdad (===)
o igualdad debil con el operador (==) que convierte ambos valores a un tipo de datos.

Aquí están las correcciones realizadas:

Usé los operador de igualdad (==) y (===) para comparar los valores.
Cambié los nombres de las variables stringUn, stringTreinta y stringDiez.*/
