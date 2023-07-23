import path from 'path';
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (_,res) => res.render("home"));
app.get("/*", (_,res) => res.redirect("/"));

const 

const handleListen = () => console.log(`Listening on http://localhost:3000`)

const server = http.createServer(app);

//같은 서버에서 http, webSocket을 둘 다 사용하기 위해서 작성 (같은 포트에 있는 것을 원한다면)
//ws만 원할 때는 WebSocket 서버만 만들면 된다. -> 필수 사항은 아니라는 것
const wss = new WebSocketServer({ server }); //이걸로 연결은 되지만 아직 이벤트를 리슨하고 있지 않음

//연결 후 소켓을 통해 이벤트를 리슨하는 부분
wss.on("connection", (socket) => {
    // console.log(socket); //연결된 브라우저
    console.log("connect to browser");
    socket.on("close", () => {
        console.log("Disconnect from the browser"); //브라우저 닫기
    });
    socket.on("message", (message) => {
        console.log(message.toString('utf-8'));
    })
    socket.send("hello!!");
});

server.listen(3000, handleListen);