// Recupera la lista de compras del localStorage o inicializa una nueva si no existe
const listaCompras = JSON.parse(localStorage.getItem('listaCompras')) || {
    'Frutas': [],
    'Lácteos': [],
    'Congelados': [],
    'Dulces': [],
    'Otros': []
};

// Guarda la lista de compras en el localStorage
function guardarLista() {
    localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
}

// Procesa la respuesta del usuario sobre si desea agregar un alimento
function procesarRespuesta() {
    const respuesta = document.getElementById('respuesta').value.toLowerCase();
    if (respuesta === 'sí' || respuesta === 'si') {
        preguntarAlimento();
    } else if (respuesta === 'no') {
        mostrarLista();
    } else {
        alert('Por favor, responde con "sí" o "no".');
    }
    document.getElementById('respuesta').value = '';
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
        <p>¿Deseas agregar otro alimento a tu lista de compras? (sí/no)</p>
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
    document.getElementById('lista').innerHTML = resultado;
    document.getElementById('preguntas').style.display = 'none';
}

// Agrega un botón para limpiar la lista de compras
agregarBotonLimpiar();

function agregarBotonLimpiar() {
    const botonLimpiar = document.createElement('button');
    botonLimpiar.textContent = 'Limpiar Lista';
    botonLimpiar.onclick = limpiarLista;
    document.body.appendChild(botonLimpiar);
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
        <p>¿Deseas agregar un alimento a tu lista de compras? (sí/no)</p>
        <input type="text" id="respuesta" onkeypress="if(event.key === 'Enter') procesarRespuesta()" />
        <button onclick="procesarRespuesta()">Enviar</button>
    `;
    
    // Asegúrate de que el contenedor de preguntas esté visible
    document.getElementById('preguntas').style.display = 'block';
}

