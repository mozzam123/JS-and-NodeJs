// Creating a buffer from a hexadecimal string
const hexBuffer = Buffer.from('1a', 'hex')

// Modifying the buffer
hexBuffer[0] = 0x2a;

// Converting the buffer back to a string
const modified_buffer = hexBuffer.toString('hex')
console.log(modified_buffer);