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