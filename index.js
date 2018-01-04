const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'docker') {
    dotenv.config();
}

require = require('@std/esm')(module); // eslint-disable-line no-global-assign
require('./server');
