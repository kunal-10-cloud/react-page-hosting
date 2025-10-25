import { io } from "socket.io-client";

const socket = io("http://localhost:9022");

const projectSlug = "proj-123";
socket.emit("subscribe", `logs:${projectSlug}`);

socket.on("message", (msg) => {
  console.log("📢 Message from server:", msg);
});
