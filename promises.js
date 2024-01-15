// Import the 'fs/promises' module for file system operations with promises
const fs = require('fs/promises');

// Function to get the sum of two numbers and return a promise
function getSumNum(a, b) {
    // Create a new promise
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b;

        // Resolve if the sum is less than or equal to 5
        if (sum <= 5) {
            resolve("lets go");
        } else {
            // Reject with an error if the sum is greater than 5
            reject(new Error("oops less than 5 is accepted"));
        }
    });

    // Return the created promise
    return customPromise;
}

// Example usage of the getSumNum function
getSumNum(1, 3)
    .then(data => {
        // Log the resolved data
        console.log(data);
    })
    .catch(err => {
        // Log any errors that occur during the promise execution
        console.log(err);
    });

// Async function to read a file and double its content
async function readFileAndDouble(filePath) {
    try {
        // Read file content using fs.readFile
        const data = await fs.readFile(filePath, 'utf8');
        // Double the content and trim any leading/trailing whitespaces
        return data.trim() + data.trim();
    } catch (err) {
        // Throw any errors that occur during file reading
        throw err;
    }
}

// Example usage of the readFileAndDouble function within an async IIFE
(async () => {
    try {
        // Call the async function to read and double the content of 'hello.txt'
        const result = await readFileAndDouble('hello.txt');
        // Log the result
        console.log(result);
    } catch (err) {
        // Log any errors that occur during the async function execution
        console.error(err);
    }
})();
