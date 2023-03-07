const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const { authentication } = req.headers;
    if (authentication) {
        jwt.verify(authentication, 'masai', (err, decoded) => {
            if (err) {
                res.send({ msg: "Please Login First" })
            } else if (decoded) {
                next();
            } else {
                next();
            }
        })
    } else {
        res.send({ msg: "Please Login First" })
    }
};

module.exports = { auth };