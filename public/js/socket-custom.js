let socket = io();

// on es para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

// los emit son para enviar información
socket.emit(
    "emitMessage", {
        usuario: "Jaime",
        mensaje: "Hola mundo",
    },
    function(resp) {
        console.log("Respuesta Server:", resp);
    }
);

// Escuchar información
socket.on("welcomeUser", function(message) {
    console.log("Servidor:", message);
});