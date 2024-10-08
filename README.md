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

######################################################################################################

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

######################################################################################################

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

## Contribuciones

Si deseas contribuir a este proyecto, por favor, abre un issue o envía un pull request. ¡Todas las contribuciones son bienvenidas!

######################################################################################################

# DESAFIO 4 Juego de Adivinar el Número

## Descripción
Este es un simple juego de consola en JavaScript donde el jugador debe adivinar un número aleatorio entre 0 y 10. El juego ofrece pistas y permite múltiples intentos, brindando una experiencia interactiva y divertida.

## Características
- Generación de números aleatorios entre 0 y 10. (se puede modificar el rango)
- Límite de 3 intentos por ronda.
- Pistas que indican si el número a adivinar es mayor o menor.
- Personalización con el nombre del jugador.
- Opción de jugar múltiples rondas.
- Mensajes personalizados basados en el progreso del jugador.

## Cómo jugar
1. El juego te pedirá tu nombre al inicio.
2. Se generará un número aleatorio entre 0 y 10.
3. Tienes 3 intentos para adivinar el número.
4. Después de cada intento, recibirás una pista si el número es mayor o menor.
5. Si adivinas el número, ganarás la ronda.
6. Si no adivinas después de 3 intentos, perderás la ronda.
7. Al final de cada ronda, puedes elegir si quieres jugar de nuevo.

## Estructura del código
- `generarNumeroAleatorio(min, max)`: Genera un número aleatorio.
- `pedirNombre()`: Solicita y almacena el nombre del jugador.
- `jugarAdivinaElNumero()`: Función principal que maneja la lógica del juego.
- `preguntarJugarDeNuevo()`: Pregunta al jugador si desea jugar otra ronda.
- `iniciarJuego()`: Inicia y controla el flujo del juego.

## Cómo ejecutar
1. Copia todo el código en un archivo JavaScript (por ejemplo, `juego.js`).
2. Ejecuta el archivo en un entorno que soporte JavaScript (como Node.js) o inclúyelo en una página HTML y ábrela en un navegador web.

## Personalización
Puedes modificar fácilmente algunos parámetros del juego:
- Cambia `MIN` y `MAX` en `jugarAdivinaElNumero()` para alterar el rango de números.
- Modifica `INTENTOS_MAXIMOS` para cambiar el número de intentos permitidos.

## Notas
- El juego utiliza `alert()` y `prompt()` para la interacción, lo que lo hace ideal para entornos de navegador.
- El nombre del jugador se guarda durante toda la sesión de juego.

######################################################################################################

# DESAFIO 5 Lista de Compras Interactiva

## Descripción
Este proyecto es una aplicación web interactiva que permite a los usuarios crear una lista de compras organizada por categorías. Los usuarios pueden agregar alimentos a diferentes categorías y ver una lista final organizada de sus compras.

## Características
- Interfaz de usuario simple e intuitiva
- Agregar alimentos a la lista de compras
- Categorizar alimentos (Frutas, Lácteos, Congelados, Dulces, Otros)
- Visualizar la lista de compras organizada por categorías

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)

## Cómo Usar
1. Abre el archivo `index.html` en un navegador web moderno.
2. Responde "sí" o "no" a la pregunta inicial para agregar alimentos.
3. Si respondes "sí":
   - Ingresa el nombre del alimento.
   - Selecciona la categoría del alimento.
   - Repite el proceso para agregar más alimentos.
4. Si respondes "no", se mostrará la lista de compras organizada.

## Estructura del Proyecto
- `index.html`: Contiene la estructura HTML, los estilos CSS y el script JavaScript.

## Funciones Principales
- `procesarRespuesta()`: Maneja la respuesta inicial del usuario.
- `preguntarAlimento()`: Solicita el nombre del alimento al usuario.
- `procesarAlimento()`: Procesa el alimento ingresado.
- `preguntarCategoria()`: Muestra opciones de categorías para el alimento.
- `agregarAlimento()`: Añade el alimento a la categoría seleccionada.
- `mostrarLista()`: Muestra la lista final de compras organizada.
- `limpiarLista()`: No solo vaciará la lista de compras, sino que también reiniciará el programa.

## Personalización
Puedes modificar las categorías predefinidas editando el objeto `listaCompras` en el script JavaScript.

## Mejoras Futuras
- Agregar persistencia de datos (almacenamiento local)
- Implementar funcionalidad para eliminar o editar elementos
- Mejorar el diseño responsive para dispositivos móviles
  
#######################################################################################################

# DESAFIO 6 Lista de Compras (adicionar y eliminar de lista)

## Descripción
Esta es una aplicación web simple que te permite mantener una lista de compras organizada por categorías. Puedes agregar o eliminar elementos de la lista, y la aplicación guarda tus cambios en el localStorage del navegador.

## Características

- Organización de la lista de compras por categorías (Frutas, Granos, Carnes, Lácteos, Congelados, Dulces, Aseo, Otros).
- Agregar nuevos elementos a la lista.
- Eliminar elementos existentes de la lista.
- Limpiar toda la lista de compras.
- Guardar y cargar la lista de compras en el localStorage del navegador.

## Cómo usar

1. Abre el archivo index.html en tu navegador.
2. Responde a la pregunta inicial con "sí" o "no" para comenzar a agregar o eliminar elementos de la lista.
3. Sigue las instrucciones en la pantalla para realizar las acciones deseadas.
4. Una vez que hayas terminado de modificar la lista, puedes ver la lista completa y guardarla.
5. Si deseas comenzar de nuevo, puedes hacer clic en el botón "Reiniciar Programa" para limpiar la lista.

## Archivos del proyecto

- index.html: Archivo HTML que contiene la estructura de la aplicación.
- styles6.css: Archivo CSS que define el estilo visual de la aplicación.
- desafio6.js: Archivo JavaScript que contiene la lógica de la aplicación.

## Requisitos

Un navegador web moderno, como Google Chrome, Mozilla Firefox o Microsoft Edge.

## Contribución
Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un issue o enviar un pull request en el repositorio de GitHub.

#######################################################################################################

# DESAFIO 7 Calculadora JavaScript

## Descripción
Esta es una calculadora simple implementada en JavaScript. Ofrece funcionalidades básicas de cálculo, incluyendo suma, resta, multiplicación, división, porcentaje y raíz cuadrada. La calculadora cuenta con una interfaz de usuario que puede ser controlada tanto por clics como por entradas de teclado.

## Características
- Operaciones básicas: suma (+), resta (-), multiplicación (*), división (/)
- Funciones adicionales:
  - Porcentaje (%)
  - Raíz cuadrada (√)
  - Cambio de signo (+/-)
- Borrado completo (AC)
- Manejo de errores (división por cero, raíz cuadrada de números negativos)
- Interfaz responsive que funciona con clics y entradas de teclado

## Uso
1. Abra el archivo HTML en su navegador para ver la calculadora.
2. Use los botones en pantalla o su teclado para ingresar números y realizar operaciones.
3. Para usar el teclado:
   - Números y operadores básicos funcionan como se espera
   - 'Enter' para calcular el resultado (=)
   - 'Escape' para borrar (AC)
   - 'r' o 'R' para raíz cuadrada
   - '%' para porcentaje

## Estructura del Código
- El código está contenido en un único archivo JavaScript.
- Se utiliza el evento 'DOMContentLoaded' para asegurar que el DOM esté completamente cargado antes de ejecutar el script.
- Las funciones principales incluyen:
  - `clearDisplay()`: Limpia la pantalla y reinicia las variables.
  - `appendToDisplay(value)`: Añade un valor a la pantalla.
  - `performOperation(op, a, b)`: Realiza la operación matemática.
  - `calculateResult()`: Calcula y muestra el resultado final.
  - Funciones específicas para cada operación especial (raíz cuadrada, porcentaje, etc.)

## Personalización
Para personalizar la calculadora:
1. Modifique el HTML para cambiar la apariencia de los botones.
2. Ajuste los estilos CSS para alterar el diseño visual.
3. Expanda las funciones en JavaScript para añadir nuevas operaciones.

## Notas
- La calculadora utiliza `toFixed(2)` ó `toFixed(8)` para limitar la precisión decimal y evitar problemas de representación de punto flotante.
- Se han implementado comprobaciones de errores para operaciones inválidas.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abra un issue para discutir cambios mayores antes de enviar un pull request.
