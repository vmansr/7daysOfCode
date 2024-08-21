// Recupera la lista de compras del localStorage o inicializa una nueva si no existe
const listaCompras = JSON.parse(localStorage.getItem('listaCompras')) || {
    'Frutas': [],
    'Granos': [],
    'Carnes': [],
    'Lácteos': [],
    'Congelados': [],
    'Dulces': [],
    'Aseo' : [],
    'Otros': []
};

// Guarda la lista de compras en el localStorage
function guardarLista() {
    localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
}

// Procesa la respuesta del usuario sobre si desea agregar o eliminar un alimento
function procesarRespuesta() {
    const respuesta = document.getElementById('respuesta').value.toLowerCase();
    if (respuesta === 'sí' || respuesta === 'si') {
        preguntarAccion();
    } else if (respuesta === 'no') {
        mostrarLista();
    } else {
        alert('Por favor, responde con "sí" o "no".');
    }
    document.getElementById('respuesta').value = '';
}

// Pregunta al usuario si desea agregar o eliminar un alimento
function preguntarAccion() {
    let opciones = '<option value="agregar">Agregar</option>';
    if (tieneElementos()) {
        opciones += '<option value="eliminar">Eliminar</option>';
    }
    document.getElementById('preguntas').innerHTML = `
        <p>¿Deseas agregar o eliminar un alimento?</p>
        <select id="accion" onkeypress="if(event.key === 'Enter') procesarAccion()">
            ${opciones}
        </select>
        <button onclick="procesarAccion()">Enviar</button>
    `;
}

// Procesa la acción seleccionada por el usuario
function procesarAccion() {
    const accion = document.getElementById('accion').value;
    if (accion === 'agregar') {
        preguntarAlimento();
    } else if (accion === 'eliminar') {
        mostrarListaParaEliminar();
    }
}

// Pregunta al usuario qué alimento desea agregar
function preguntarAlimento() {
    document.getElementById('preguntas').innerHTML = `
        <p>¿Qué alimento deseas agregar?</p>
        <input type="text" id="alimento" onkeypress="if(event.key === 'Enter') procesarAlimento()" />
        <button onclick="procesarAlimento()">Agregar</button>
    `;
}

// Procesa el alimento ingresado por el usuario
function procesarAlimento() {
    const alimento = document.getElementById('alimento').value;
    if (alimento) {
        preguntarCategoria(alimento);
    } else {
        alert('Por favor, ingresa un alimento.');
    }
}
// Pregunta al usuario en qué categoría encaja el alimento ingresado
function preguntarCategoria(alimento) {
    const categorias = Object.keys(listaCompras);
    let opciones = categorias.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    
    document.getElementById('preguntas').innerHTML = `
        <p>¿En qué categoría se encaja "${alimento}"?</p>
        <select id="categoria" onkeypress="if(event.key === 'Enter') agregarAlimento('${alimento}')">
            ${opciones}
        </select>
        <button onclick="agregarAlimento('${alimento}')">Agregar</button>
    `;
}
// Agrega el alimento a la categoría seleccionada y guarda la lista
function agregarAlimento(alimento) {
    const categoria = document.getElementById('categoria').value;
    listaCompras[categoria].push(alimento);
    guardarLista();
    
    document.getElementById('preguntas').innerHTML = `
        <p>¿Deseas agregar o eliminar otro alimento de tu lista de compras? (sí/no)</p>
        <input type="text" id="respuesta" onkeypress="if(event.key === 'Enter') procesarRespuesta()" />
        <button onclick="procesarRespuesta()">Enviar</button>
    `;
}
// Muestra la lista de compras en la página
function mostrarLista() {
    let resultado = '<h2>Lista de compras:</h2>';
    for (const [categoria, alimentos] of Object.entries(listaCompras)) {
        if (alimentos.length > 0) {
            resultado += `
                <div class="categoria">
                    <span class="categoria-titulo">${categoria}:</span> ${alimentos.join(', ')}
                </div>
            `;
        }
    }
    document.getElementById('lista').innerHTML = resultado; // Corregido aquí
}
// Verifica si hay elementos en la lista de compras
function tieneElementos() {
    return Object.values(listaCompras).some(alimentos => alimentos.length > 0);
}
// Muestra la lista de compras para que el usuario pueda eliminar un elemento
function mostrarListaParaEliminar() {
    let resultado = '<h2>Lista de compras:</h2>';
    for (const [categoria, alimentos] of Object.entries(listaCompras)) {
        if (alimentos.length > 0) {
            resultado += `
                <div class="categoria">
                    <span class="categoria-titulo">${categoria}:</span> ${alimentos.join(', ')}
                </div>
            `;
        }
    }
    document.getElementById('lista').innerHTML = resultado;
    document.getElementById('preguntas').innerHTML = `
        <p>¿Qué elemento deseas eliminar de la lista?</p>
        <div class="categoria-seleccion">
            <input type="text" id="elemento" placeholder="Escribe el elemento a eliminar" onkeypress="if(event.key === 'Enter') eliminarElemento()">
            <button onclick="eliminarElemento()">Eliminar</button>
        </div>
    `;
    document.getElementById('preguntas').style.display = 'block';
}
// Elimina el elemento seleccionado de la lista
function eliminarElemento() {
    const elemento = document.getElementById('elemento').value.toLowerCase();
    let eliminado = false;
    
    for (const categoria in listaCompras) {
        const index = listaCompras[categoria].findIndex(item => item.toLowerCase() === elemento);
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            eliminado = true;
            break;
        }
    }
    if (eliminado) {
        guardarLista();
        mostrarConfirmacionEliminacion(elemento);
        mostrarLista(); // Actualizar la lista después de eliminar el elemento
    } else {
        mostrarMensajeNoEncontrado(elemento);
    }
    document.getElementById('elemento').value = ''; // Limpiar el campo de entrada
}
// Verifica si la lista de compras tiene elementos
function tieneElementos() {
    for (const categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            return true;
        }
    }
    return false;
}
function agregarBotonLimpiar() {
    const botonLimpiar = document.createElement('button');
    botonLimpiar.textContent = 'Limpiar lista';
    botonLimpiar.onclick = limpiarLista;
    document.body.appendChild(botonLimpiar); // O en cualquier otro lugar adecuado
}
// Limpia la lista de compras y actualiza la interfaz
function limpiarLista() {
    // Limpia todas las categorías en la lista de compras
    for (const categoria in listaCompras) {
        listaCompras[categoria] = [];
    }
    // Limpia el contenido del contenedor de la lista
    document.getElementById('lista').innerHTML = '';
    // Muestra nuevamente la pregunta inicial
    document.getElementById('preguntas').innerHTML = `
        <p>¿Deseas agregar o eliminar un alimento de tu lista de compras? (sí/no)</p>
        <input type="text" id="respuesta" onkeypress="if(event.key === 'Enter') procesarRespuesta()" />
        <button onclick="procesarRespuesta()">Enviar</button>
    `;
    // Asegúrate de que el contenedor de preguntas esté visible
    document.getElementById('preguntas').style.display = 'block';
}
// Nueva función para agregar la lista a la página
function agregarLista() {
    mostrarLista();
    document.getElementById('listaAcciones').style.display = 'none';
}
// Nueva función para eliminar la lista de la página
function eliminarLista() {
    document.getElementById('lista').innerHTML = '';
    document.getElementById('listaAcciones').style.display = 'none';
}


// Función actualizada para mostrar la lista definitiva
// Función actualizada para mostrar la lista definitiva
function mostrarLista() {
    let resultado = '<h2>Lista de compras:</h2>';
    for (const [categoria, alimentos] of Object.entries(listaCompras)) {
        if (alimentos.length > 0) {
            resultado += `
                <div class="categoria">
                    <span class="categoria-titulo">${categoria}:</span> ${alimentos.join(', ')}
                </div>
            `;
        }
    }
    document.getElementById('lista').innerHTML = resultado;
    document.getElementById('listaAcciones').style.display = 'none';
    document.getElementById('modificarLista').style.display = 'none';
    document.getElementById('finalizarLista').style.display = 'flex';
    guardarLista(); // Guardar la lista después de mostrarla
}

// Función actualizada para mostrar la confirmación de eliminación
function mostrarConfirmacionEliminacion(elemento) {
    document.getElementById('preguntas').innerHTML = `
        <p>¡El elemento "${elemento}" ha sido eliminado de la lista de compras!</p>
        <button onclick="preguntarAccion()">Continuar</button>
    `;
}

// Función actualizada para mostrar el mensaje cuando un elemento no se encuentra
function mostrarMensajeNoEncontrado(elemento) {
    document.getElementById('preguntas').innerHTML = `
        <p>¡No fue posible encontrar el elemento "${elemento}" en la lista!</p>
        <button onclick="preguntarAccion()">Continuar</button>
    `;
}

// Función para reiniciar el programa
function reiniciarPrograma() {
    // Limpia todas las categorías en la lista de compras
    for (const categoria in listaCompras) {
        listaCompras[categoria] = [];
    }
    // Limpia el contenido del contenedor de la lista
    document.getElementById('lista').innerHTML = '';
    // Muestra nuevamente la pregunta inicial
    document.getElementById('preguntas').innerHTML = `
        <p>¿Deseas agregar o eliminar un alimento de tu lista de compras?</p>
        <div class="actions">
            <input type="text" id="respuesta" placeholder="Responde con 'sí' o 'no'" onkeypress="if(event.key === 'Enter') procesarRespuesta()">
            <button onclick="procesarRespuesta()">Enviar</button>
        </div>
    `;
    // Asegúrate de que el contenedor de preguntas esté visible
    document.getElementById('preguntas').style.display = 'block';
    // Oculta los contenedores de lista y modificación de lista
    document.getElementById('listaAcciones').style.display = 'none';
    document.getElementById('modificarLista').style.display = 'none';
    // Guarda la lista limpia en el localStorage
    guardarLista();
}