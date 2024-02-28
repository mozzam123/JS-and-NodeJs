const { spawn } = require('child_process');

// Example: Run a child process to list files in the current directory
const ls = spawn('dir', ['ls']);

// Event listeners for data, error, and exit events
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
