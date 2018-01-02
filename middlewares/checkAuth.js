import wrap from '../support/wrapAsync';

const checkAuth = async (req, res, next) => {
    next();
};

export default wrap(checkAuth);
