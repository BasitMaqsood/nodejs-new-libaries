import http from 'http';
import chalk from 'chalk';

http.createServer((req, res) => {
    console.log(chalk.underline.green.bgWhite.bold('Server is Running !!!'))
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);
