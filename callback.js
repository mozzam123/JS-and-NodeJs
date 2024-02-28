// Definition
"In Node.js, a callback is a function that is passed as an argument to another function and is executed after the completion of a particular task."
"Callbacks are fundamental to the asynchronous nature of Node.js, allowing it to handle multiple operations concurrently without blocking the execution of the program"


// Callback using function name

setTimeout(function () {
    console.log('callback as standard function');
}, 1000)


// Callback using arrow functions

setTimeout(() =>{
    console.log('callback as arrow function');
}, 1000)


