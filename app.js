// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo.
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    
    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
    }
    
    document.getElementById("amigo").value = "";

    // Llamamos la función para actualizar la lista de amigos cada vez que se agrega un amigo nuevo.
    actualizarListaAmigos()
};

// Función para actualizar la lista de amigos.
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = amigos[index];
        lista.append(li);
    }
};

// Función para elegir un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Lista de amigos vacía, Agrega mínimo dos amigos para hacer el sorteo.");
    } else {
        indiceSorteado = generarIndiceAleatorio();
        console.log()
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigos[indiceSorteado]}`
    }
}

// Función para generar un indice aleatorio para seleccionar un amigo de la lista.
function generarIndiceAleatorio() {
    return Math.floor(Math.random()*amigos.length)
}