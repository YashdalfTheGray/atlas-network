const pois = require('../poi');

const getPoi = (req, res) => {
    res.send(pois.map(p => p.id));
};

export default getPoi;
