import request from 'request-promise';

import wrap from '../support/wrapAsync';

const pois = require('../poi');

const getPoiStatus = async (req, res) => {
    const selectedPoi = pois.filter(p => p.id === req.params.id)[0];
    res.send(selectedPoi);

    const responses = selectedPoi.services.map(async (s) => {
        const r = await request({
            url: `http://${s.ip}:${s.port}`
        });

        return { name: s.name, ...r };
    });

    res.send(responses);
};

export default wrap(getPoiStatus);
