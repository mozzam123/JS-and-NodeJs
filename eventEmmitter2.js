// Using Event Emmitter with 'Once'

// 'once' is used to only emit the event once.


const events = require("events");
const eventEmmitter = new events.EventEmitter();

const listenedOne = () => {
  console.log("Listened only once");
};

eventEmmitter.once("listened-once", listenedOne);
eventEmmitter.emit("listened-once");
