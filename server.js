const express = require('express');
const { join }  = require('path');
const chalk = require('chalk');

const port = 8080;
const app = express();
const line = '\n----------------------------------------\n';

app.set('view engine', 'ejs');
app.use('/', express.static(join(__dirname, '/assets')));

app.get('*', (req, res) => {
    console.log(
        chalk.yellow(line),
        chalk.green(`request: ${req.path}\n`),
        chalk.gray(`${JSON.stringify(req.headers, null, 2)}`)
    );
    res.render(join(__dirname, 'index'));
});

app.listen(port, () => {
    process.stdout.write('\033c');
    console.log(
        chalk.gray(line),
        chalk.cyan(`  Now listening on port: ${port}`),
        chalk.gray(line)
    );

    if (process.send) {
        process.send('online');
    }
});


