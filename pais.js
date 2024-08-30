
const pila = [];
const cola = [];


function actualizarListas() {
    document.getElementById('pilaList').innerHTML = pila.map(pais => `<li>${pais}</li>`).join('');
    document.getElementById('colaList').innerHTML = cola.map(pais => `<li>${pais}</li>`).join('');
}


function agregarPila() {
    const pais = document.getElementById('paisInput').value.trim();
    if (pais) {
        pila.push(pais);
        document.getElementById('paisInput').value = '';
        actualizarListas();
    }
}


function eliminarPila() {
    if (pila.length > 0) {
        pila.pop();
        actualizarListas();
    }
}


function agregarCola() {
    const pais = document.getElementById('paisInput').value.trim();
    if (pais) {
        cola.push(pais);
        document.getElementById('paisInput').value = '';
        actualizarListas();
    }
}


function eliminarCola() {
    if (cola.length > 0) {
        cola.shift();
        actualizarListas();
    }
}
