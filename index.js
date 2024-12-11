const express = require("express");
const http = require("http");
const path = require("path");
const  {Server}= require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 9000

const io = new Server(server);

io.on("connection", (socket)=>{
    socket.on("message", (mess)=>{
        io.emit("message",mess);
    })
})

app.use(express.static(path.resolve("./public")));

app.get("/", (req,res)=>{
    return res.sendFile("./public/index.html")
})

server.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})