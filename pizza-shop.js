const EventEmitter = require("node:events")



// Function to generate a random boolean value
function getRandomBoolean() {
    return Math.random() < 0.5;
  }


class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
    }

    addCustomEventListener(eventType, listener){

    }

    order(size, quantity) {
        this.orderNumber++
        this.payment = getRandomBoolean();
        this.emit("order", size, quantity)
        this.emit("delivery", this.orderNumber)
        this.emit("payment", this.payment)
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
}



module.exports = PizzaShop