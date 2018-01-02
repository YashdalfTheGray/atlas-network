import publicIp from 'public-ip';

import wrap from '../support/wrapAsync';

const getPublicIp = async (req, res) => {
    const ip = await publicIp.v4();
    res.send(ip);
};

export default wrap(getPublicIp);
