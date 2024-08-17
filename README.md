# Comparación de Tipos en JavaScript

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

###################################################################################################################################################################

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

```javascript
// Solicitar información al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar el mensaje inicial
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Preguntar si le gusta estudiar el lenguaje
let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Evaluar la respuesta y mostrar el mensaje correspondiente
if (respuesta == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == 2) {
    let intentoOtrosLenguajes = prompt("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes? Responde con el número 1 para SÍ o 2 para NO.");
    
    if (intentoOtrosLenguajes == 1) {
        let otroLenguaje = prompt("¿Cuál otro lenguaje has intentado aprender?");
        alert(`¡Genial! Es bueno saber que también has intentado aprender ${otroLenguaje}.`);
    } else if (intentoOtrosLenguajes == 2) {
        alert("Quizás podrías intentar aprender otros lenguajes para encontrar uno que te guste más.");
    } else {
        alert("Respuesta no válida. Por favor, responde con el número 1 para SÍ o 2 para NO.");
    }
} else {
    alert("Respuesta no válida. Por favor, responde con el número 1 para SÍ o 2 para NO.");
}

##########################################################################################################################################################################

# DESAFIO 3 Juego de Aprendizaje en Programación

Este es un sencillo juego interactivo en JavaScript diseñado para guiar a los usuarios a través de un viaje de aprendizaje en programación. El juego permite a los usuarios elegir entre diferentes áreas y tecnologías para aprender, y proporciona una experiencia personalizada basada en sus elecciones.

## Descripción

El juego comienza pidiendo al usuario su nombre y luego le pregunta si quiere seguir el camino de Front-End o Back-End. Dependiendo de su elección, se le presentan opciones adicionales para elegir tecnologías específicas. Finalmente, el usuario puede decidir si quiere especializarse en un área o convertirse en Fullstack, y puede seguir añadiendo tecnologías que le gustaría aprender.

## Estructura del Código

El código está estructurado de la siguiente manera:

1. **Inicio del Juego**: Se solicita el nombre del usuario y se le da la bienvenida.
2. **Elección de Área**: El usuario elige entre Front-End y Back-End.
3. **Elección de Tecnología**: Dependiendo del área elegida, el usuario selecciona una tecnología específica.
4. **Especialización**: El usuario decide si quiere especializarse en el área elegida o convertirse en Fullstack.
5. **Añadir Tecnologías**: El usuario puede seguir añadiendo tecnologías que le gustaría aprender.
6. **Final del Juego**: Se agradece al usuario por participar y se le desea suerte en su camino de aprendizaje.

## Ejecución del Código

Para ejecutar el código, simplemente copia y pega el siguiente script en la consola de tu navegador o en un archivo HTML:

```javascript
function inicioJuego() {
    let nombreUsuario = prompt('¿Cuál es tu nombre?');
    alert(`¡Hola, ${nombreUsuario}! Vamos a comenzar tu viaje de aprendizaje en programación.`);

    let area = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End? (Escribe 'Front-End' o 'Back-End')").toLowerCase();

    if (area === "front-end") {
        let eleccionFrontEnd = prompt("¿Quieres aprender React o aprender Vue? (Escribe 'React' o 'Vue')").toLowerCase();
        if (eleccionFrontEnd === "react") {
            alert(`Has elegido aprender React, ${nombreUsuario}. ¡Buena elección!`);
        } else if (eleccionFrontEnd === "vue") {
            alert(`Has elegido aprender Vue, ${nombreUsuario}. ¡Excelente!`);
        } else {
            alert("Opción no válida.");
            return;
        }
    } else if (area === "back-end") {
        let eleccionBackEnd = prompt("¿Quieres aprender C# o aprender Java? (Escribe 'C#' o 'Java')").toLowerCase();
        if (eleccionBackEnd === "c#") {
            alert(`Has elegido aprender C#, ${nombreUsuario}. ¡Genial!`);
        } else if (eleccionBackEnd === "java") {
            alert(`Has elegido aprender Java, ${nombreUsuario}. ¡Fantástico!`);
        } else {
            alert("Opción no válida.");
            return;
        }
    } else {
        alert("Opción no válida.");
        return;
    }

    let especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack? (Escribe 'especializarme' o 'Fullstack')").toLowerCase();
    if (especializacion === "especializarme") {
        alert(`¡Qué bien, ${nombreUsuario}! Has elegido seguir especializándote en tu área. ¡Sigue así!`);
    } else if (especializacion === "fullstack") {
        alert(`Has elegido convertirte en Fullstack, ${nombreUsuario}. ¡Impresionante!`);
    } else {
        alert("Opción no válida.");
        return;
    }

    let masTecnologias = true;
    while (masTecnologias) {
        let tecnologia = prompt("¿En qué tecnologías te gustaría especializarte o conocer?");
        alert(`¡Genial, ${nombreUsuario}! Aprender ${tecnologia} será muy útil.`);
        masTecnologias = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra cosa para terminar)").toLowerCase() === "ok";
    }

    alert(`¡Gracias por jugar, estimado ${nombreUsuario}! ¡Buena suerte en tu camino de aprendizaje!`);
}

inicioJuego();
