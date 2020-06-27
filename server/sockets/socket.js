const { io } = require("../server");

io.on("connection", (client) => {
    console.log("Usuario conectado");

    client.emit("welcomeUser", {
        user: "Administrador",
        mesage: "Bienvenido al chat",
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    //escuchar el cliente
    client.on("emitMessage", (data, callback) => {
        console.log(data);

        // con broadcast envía la info a todos los usaurios
        client.broadcast.emit("welcomeUser", data);

        // if (message.usuario) {
        //     callback({
        //         resp: "TODO SALIO BIEN!",
        //     });
        // } else {
        //     callback({
        //         resp: "TODO SALIO MALLLL",
        //     });
        // }
    });
});