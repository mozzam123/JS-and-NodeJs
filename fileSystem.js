// Below is the example to read a file in sync way

const fs = require("fs")
const data = fs.readFileSync('hello.txt', 'utf-8');

// console.log(data);


// Below is the example to read a file in async way using normal functions

// const asyncdata = fs.readFile('hello.txt', 'utf-8', function (err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }

// })


// Below is the example to read a file in async way using arrow functions

const newdata = fs.readFile('hello.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
})