const PizzaShop = require("./pizza-shop")

const pizza = new PizzaShop()

pizza.on("order", (size, quantity) => {
    console.log(`Order recieved! of ${quantity} ${size} pizza `);
})

pizza.on("order", (size, quantity) => {
    if (size === "large" & quantity >= 2) {
        console.log(`You get a complimentary drink`);
    }
})

pizza.on("delivery", (ordernumber) => {
    console.log(`Order is out for delivery for order no: ${ordernumber}`);
})

pizza.on("payment", (payment) => {
    if (payment === true) {
        console.log(`Payment is done`);
    }
    else {
        console.log('Payment is not done');
    }
})


pizza.order("large", 1)
pizza.displayOrderNumber()