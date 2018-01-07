import request from 'request-promise';

import wrap from '../support/wrapAsync';

const pois = require('../poi');

const getPoiStatus = async (req, res) => {
    const selectedPoi = pois.filter(p => p.id === req.params.id)[0];
    res.send(selectedPoi);
};

export default wrap(getPoiStatus);
