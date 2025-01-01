import express from "express";
import http from "http";
import ServerConfig from './config/serverConfig';
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", // all the requests
        methods: ["GET", "POST"]
    }
});


// Bare minimum socket.io setup
// adding eventlistener -> connection event gives us socket object
io.on("connection", (socket) => {
    console.log("New user connected!!");

    // in case of after connecting if user is disconnected
    socket.on("disconnect", () => {
        console.log("User Disconnected!!");
    });
});


server.listen(ServerConfig.PORT, () => {
    console.log(`Server is running at port: ${ServerConfig.PORT}`);
});








// ----------------------------practice---------------------------------

// import express from "express";
// import http from "http";
// import ServerConfig from "./config/serverConfig";
// import { Server } from "socket.io";
// import cors from "cors";

// const app = express();

// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: "*", // all the requests
//         methods: ["GET", "POST"]
//     }
// })

// server.listen(ServerConfig.PORT, () => {
//     console.log(`Server is running at port: ${ServerConfig.PORT}`);
// });
