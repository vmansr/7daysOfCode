// Variable global para almacenar el nombre del jugador
let nombreJugador = "";
let primeraPartida = true;

// Función para generar un número aleatorio entre min y max (ambos inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para pedir el nombre del jugador
function pedirNombre() {
    if (!nombreJugador) {
        nombreJugador = prompt("¿Cuál es tu nombre?");
    }
    return nombreJugador;
}

// Función principal del juego
function jugarAdivinaElNumero() {
    const MIN = 0;
    const MAX = 10;
    const INTENTOS_MAXIMOS = 3;
    const numeroAdivinar = generarNumeroAleatorio(MIN, MAX);
    let intentos = INTENTOS_MAXIMOS;

    const nombre = pedirNombre();
    
    if (primeraPartida) {
        alert(`¡Bienvenido al juego de "adivinar el número" ${nombre}! Así que empecemos!.`);
        primeraPartida = false;
    }

    while (intentos > 0) {
        // Solicitar al usuario que ingrese un número
        const adivinanza = parseInt(prompt(`Adivina el número (entre ${MIN} y ${MAX}):`), 10);

        // Verificar si la entrada es válida
        if (isNaN(adivinanza) || adivinanza < MIN || adivinanza > MAX) {
            alert(`Por favor, ingresa un número válido entre ${MIN} y ${MAX}.`);
            continue;
        }

        // Verificar si la adivinanza es correcta
        if (adivinanza === numeroAdivinar) {
            alert(`¡Felicidades ${nombre}! Adivinaste el número en ${INTENTOS_MAXIMOS - intentos + 1} intento(s).`);
            return preguntarJugarDeNuevo();
        } else {
            intentos--;
            if (intentos > 0) {
                const pista = adivinanza < numeroAdivinar ? "mayor" : "menor";
                alert(`Incorrecto. El número es ${pista}. Te quedan ${intentos} intento(s).`);
            } else {
                alert(`Lo siento ${nombre}, no adivinaste. El número era ${numeroAdivinar}.`);
            }
        }
    }

    return preguntarJugarDeNuevo();
}

// Función para preguntar si quiere jugar de nuevo
function preguntarJugarDeNuevo() {
    while (true) {
        const respuesta = prompt(`¿Quieres jugar de nuevo?\nEscribe 'si' para jugar otra vez o 'no' para terminar:`).toLowerCase();
        if (respuesta === 'si') {
            return true;
        } else if (respuesta === 'no') {
            return false;
        } else {
            alert("Por favor, responde 'si' o 'no'.");
        }
    }
}

// Función para iniciar y controlar el juego
function iniciarJuego() {
    let jugarDeNuevo = true;
    while (jugarDeNuevo) {
        jugarDeNuevo = jugarAdivinaElNumero();
    }
    alert(`Gracias por jugar, ${nombreJugador}. ¡Hasta la próxima!`);
}

// Iniciar el juego
iniciarJuego();