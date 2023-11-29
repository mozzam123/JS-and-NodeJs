const EventEmmitter = require("node:events")

const emitter = new EventEmmitter()

emitter.on("order-pizza", (quantity, size) => {
    console.log(`Your order has been placed of ${quantity} pizza of size ${size}`);
})

emitter.emit("order-pizza", 3, "medium")