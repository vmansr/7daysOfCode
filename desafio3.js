function inicioJuego() {
    let nombreUsuario = prompt('Cuál es tu nombre?');
    alert(`Hola!, ${nombreUsuario} ! Vamos a comenzar tu viaje de aprendizaje en programación.`)

    let area = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End? (Escribe 'Front-End' o 'Back-End')");

    if (area === "Front-End") {
        let eleccionFrontEnd = prompt("¿Quieres aprender React o aprender Vue? (Escribe 'React' o 'Vue')");
        if (eleccionFrontEnd === "React") {
            alert(`Has elegido aprender React, ${nombreUsuario}. ¡Buena elección!`);
        } else if (eleccionFrontEnd === "Vue") {
            alert(`Has elegido aprender Vue, ${nombreUsuario}. ¡Excelente!`);
        } else {
            alert("Opción no válida.");
            return;
        }
    } else if (area === "Back-End") {
        let eleccionBackEnd = prompt("¿Quieres aprender C# o aprender Java? (Escribe 'C#' o 'Java')");
        if (eleccionBackEnd === "C#") {
            alert(`Has elegido aprender C#, ${nombreUsuario}. ¡Genial!`);
        } else if (eleccionBackEnd === "Java") {
            alert(`Has elegido aprender Java, ${nombreUsuario}. ¡Fantástico!`);
        } else {
            alert("Opción no válida.");
            return;
        }
    } else {
        alert("Opción no válida.");
        return;
    }

    let especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack? (Escribe 'especializarme' o 'Fullstack')");
    if (especializacion === "especializarme") {
        alert(`Que bien!, ${nombreUsuario}.Has elegido seguir especializándote en tu área. ¡Sigue así!`);
    } else if (especializacion === "Fullstack") {
        alert(`Has elegido convertirte en Fullstack, ${nombreUsuario}. ¡Impresionante!`);
    } else {
        alert("Opción no válida.");
        return;
    }

    let masTecnologias = true;
    while (masTecnologias) {
        let tecnologia = prompt("¿En qué tecnologías te gustaría especializarte o conocer?");
        alert(`¡Genial!, ${nombreUsuario}. Aprender ${tecnologia} será muy útil.`);
        masTecnologias = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra cosa para terminar)") === "ok";
    }

    alert(`¡Gracias por jugar estimado ${nombreUsuario}. ¡Buena suerte en tu camino de aprendizaje!`);
}

inicioJuego();
