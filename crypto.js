// Encryption Example using Hash and HMAC


const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to Node.js')  
                   .digest('hex');  
console.log(hash);  



// Encryption example using Cipher

const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');  

const encrypted = cipher.update('Hello Node.js', 'utf8', 'hex');  
encrypted += cipher.final('hex');  

console.log(encrypted);




// Decryption example using Decipher

const { exec } = require('child_process');

exec('"/path/to/test file/test.sh" arg1 arg2');

exec('echo "The \\$HOME variable is $HOME"');