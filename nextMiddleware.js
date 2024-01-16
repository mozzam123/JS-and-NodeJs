// The next is a function in the Express router which executes the middleware succeeding the current middleware.




const express = require("express")
const app = express()

const myLogger = (req, res, next) => {
    console.log("Logged!!");
    next();
}


const myLogger2 = (req, res, next) => {
    console.log("another!!");
    next();
}


app.use(myLogger)
app.use(myLogger2)

app.get('/', (req, res)=>{
    res.send("Hellow world")
})

app.listen(3000)