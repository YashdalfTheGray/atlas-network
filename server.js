import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';

import { checkAuth, getPublicIp, getPoi } from './middlewares';

const port = process.env.PORT || process.argv[2] || 8080;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/net/public-ip', checkAuth, getPublicIp);
app.get('/net/poi', checkAuth, getPoi);

app.listen(port, () => {
    console.log(`Server now running on port ${chalk.green(port)}`);
});
