import http from 'http';
import chalk from 'chalk';
import url from 'url';

http.createServer((req, res) => {

    console.log(chalk.underline.green.bgWhite.bold('Server is Running !!!'))
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var q = url.parse(req.url, true).query;

    console.log(q);
    console.log(`
                YEAR: ${chalk.green(q.year)}
                MONTH: ${chalk.yellow(q.month)}
                `);

    var txt = q.year + " " + q.month;
    res.end(txt);

}).listen(8080);

// http://localhost:8080/?year=2023&month=July
