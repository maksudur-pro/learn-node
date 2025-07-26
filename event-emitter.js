const EventEmitter = require("events");

const myEmitter = new EventEmitter();
// listener

myEmitter.on("birthday", () => {
  console.log("Happy birthday to you");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});

myEmitter.emit("birthday", "watch");
