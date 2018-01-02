import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';

const port = process.env.PORT || process.argv[2] || 8080;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Network crawler up and running');
});

app.listen(port, () => {
    console.log(`Server now running on port ${chalk.green(port)}`);
});
