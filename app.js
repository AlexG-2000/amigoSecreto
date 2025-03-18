// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById
("listaAmigos");
const ulResultado = document.getElementById("resultado");
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco
    if (!nombre) {
        alert("Debes ingresar un nombre")
        return; // Detener la ejecución si el campo está vacío
    }

    if (listaAmigos.includes(nombre)) { // Validar duplicados 
        alert("Ese nombre ya está en la lista.");
        inputAmigo.value = ""; // limpia 
        return;
    }
    listaAmigos.push(nombre);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`; // Manera optimizada 
    inputAmigo.value = ""; // Limpiar 
    
    console.log("Antes de limpiar: ", inputAmigo.value); // Debug
    inputAmigo.value = ""; // Intento de limpieza
    console.log("Después de limpiar: ", inputAmigo.value); // Debug
}
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
function sortearAmigo () {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const random = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto= listaAmigos[random]
    ulResultado.innerHTML =  `<li>El amigo secreto es:${amigoSecreto}</li>`;
}