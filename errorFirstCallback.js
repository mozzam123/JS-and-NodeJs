/*
Any asynchronous method expects one of the arguments to be a callback.
The full callback argument list depends on the caller method, but the first argument is always an error object or null.
When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement.
The event happens after the JavaScript engine leaves the try block.
*/

const fs = require("fs");

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error occurred: ", err);
  } else {
    console.log(data);
  }
});
