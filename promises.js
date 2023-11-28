const fs = require('fs/promises')

function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b

        if (sum <= 5) {
            resolve("lets go")
        } else {
            reject(new Error("oops less than 5 is accepted"))
        }
    })
    return customPromise
}


getSumNum(1, 3).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


// Promises using async function

async function readFileAndDouble(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data.trim() + data.trim();
    } catch (err) {
        throw err;
    }
}

// Example usage:
(async () => {
    try {
        const result = await readFileAndDouble('hello.txt');
        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();

