let usuarios = [];

function agregarUsuario() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();
    
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }

    usuarios.push(nombre);
    nombreInput.value = "";
    mostrarUsuarios();
}

function mostrarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach((usuario, index) => {
        const li = document.createElement("li");
        li.textContent = usuario;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarUsuario(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    mostrarUsuarios();
}
