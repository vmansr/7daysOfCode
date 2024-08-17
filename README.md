# DESAFIO 1 Comparación de Tipos en JavaScript

Este pequeño script de JavaScript demuestra la diferencia entre los operadores de igualdad `==` (igualdad débil) y `===` (igualdad estricta) en JavaScript, utilizando comparaciones entre variables numéricas y de cadena.

## Descripción

El código define tres pares de variables:
1. `numOne` (número) y `stringOne` (cadena)
2. `numThirty` (número) y `stringThirty` (cadena)
3. `numTen` (número) y `stringTen` (cadena)

Luego, realiza comparaciones entre cada par utilizando los operadores `==` y `===`, mostrando los resultados mediante `document.write()`.

## Funcionamiento

- La primera comparación usa `==` para comparar `numOne` y `stringOne`.
- La segunda comparación usa `===` para comparar `numThirty` y `stringThirty`.
- La tercera comparación usa `==` para comparar `numTen` y `stringTen`.

## Resultados esperados

1. "Las variables numOne y stringOne tienen el mismo valor, pero tipos diferentes."
2. "Las variables numThirty y stringThirty no tienen el mismo tipo."
3. "Las variables numTen y stringTen tienen el mismo valor, pero tipos diferentes."

## Lecciones aprendidas

- El operador `==` realiza una conversión de tipo antes de la comparación.
- El operador `===` compara tanto el valor como el tipo sin realizar conversiones.

## Cómo usar

Incluye este código en un archivo HTML y ábrelo en un navegador para ver los resultados escritos en la página.

## Nota

Este código es útil para entender las peculiaridades de la comparación en JavaScript y la importancia de considerar tanto el valor como el tipo al comparar variables.

####################################################################################################

# DESAFIO 2 Programa Interactivo en JavaScript

Este programa interactivo en JavaScript solicita al usuario información personal y sobre su interés en lenguajes de programación. Dependiendo de las respuestas del usuario, el programa muestra diferentes mensajes.

## Descripción

El programa realiza las siguientes acciones:

1. Solicita al usuario su nombre, edad y el lenguaje de programación que está estudiando.
2. Muestra un mensaje personalizado con la información proporcionada.
3. Pregunta al usuario si le gusta estudiar el lenguaje de programación.
4. Dependiendo de la respuesta, muestra un mensaje de motivación o pregunta si ha intentado aprender otros lenguajes.
5. Si el usuario ha intentado aprender otros lenguajes, solicita el nombre de otro lenguaje y muestra un mensaje adicional.

## Estructura del Código

El código utiliza las funciones `prompt` y `alert` para interactuar con el usuario y la estructura condicional `if` para evaluar las respuestas.



