const checkAuth = (req, res, next) => {
    const { ACCESS_TOKEN } = process.env;

    if (req.method === 'POST' && req.body.accessToken) {
        if (req.body.accessToken.toLowerCase() === ACCESS_TOKEN.toLowerCase()) {
            next();
        }
        else {
            res.status(403).json({
                reason: 'Not authorized'
            });
        }
    }
    else if (req.get('Authorization')) {
        const authMethod = req.get('Authorization').split(' ')[0];
        const authToken = req.get('Authorization').split(' ')[1].toLowerCase();

        if (authMethod !== 'Bearer') {
            res.status(401).json({
                reason: 'Malformed auth header'
            });
        }
        else if (authToken !== ACCESS_TOKEN.toLowerCase()) {
            res.status(403).json({
                reason: 'Not authorized'
            });
        }
        else if (authToken === ACCESS_TOKEN.toLowerCase()) {
            next();
        }
    }
    else {
        res.status(401).json({
            reason: 'No auth token found in request'
        });
    }
};

export default checkAuth;
