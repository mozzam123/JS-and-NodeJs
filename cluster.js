const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
    // Master process
    const numCPUs = require('os').cpus().length;

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code ${code}, and signal ${signal}`);
        cluster.fork(); // Replace the dead worker
    });

} else {
    // Worker process
    const port = 3000;
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from worker ' + cluster.worker.id);
    });

    server.listen(port, () => {
        console.log(`Worker ${cluster.worker.id} listening on port ${port}`);
    });
}
