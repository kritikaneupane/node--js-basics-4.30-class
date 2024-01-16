const events = require("events");
//events initialize
const eventEmitter = new events.EventEmitter();
// fn define
const sayHello = () => {
  console.log("I am Hello");
};
// assign
eventEmitter.addListener("hello", sayHello); //defined event name as hello
// call the event
eventEmitter.emit("hello");
