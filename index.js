const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'docker') {
    dotenv.config();
}

require = require('@std/esm')(module); // eslint-disable-line no-global-assign

console.log(process.env.ACCESS_TOKEN);
require('./server');
