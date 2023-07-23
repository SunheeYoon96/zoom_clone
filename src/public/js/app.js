const socket = new WebSocket(`ws://${window.location.host}`); //서버로의 연결

socket.addEventListener("open", () => {
    console.log("connect to server");
});

socket.addEventListener("message", (message) => {
    console.log("Just get this", message.data, "from this server");
});

socket.addEventListener("close", () => {
    console.log("Disconnect server "); //서버 끄기
});

setTimeout( () => {
    socket.send("hello my browser");
}, 10000)