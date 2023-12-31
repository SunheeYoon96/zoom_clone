const socket = io();

const welcom = document.getElementById("welcome");
const form = welcom.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName = "";

function showRoom() {
  welcom.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
