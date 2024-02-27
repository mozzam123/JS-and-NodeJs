// Definition
"Node.js includes an additional data type called Buffer ( not available in browser's JavaScript )."
"Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network."



// Creating a buffer from a hexadecimal string
const hexBuffer = Buffer.from('1a', 'hex')

// Modifying the buffer
hexBuffer[0] = 0x2a;

// Converting the buffer back to a string
const modified_buffer = hexBuffer.toString('hex')
console.log(modified_buffer);