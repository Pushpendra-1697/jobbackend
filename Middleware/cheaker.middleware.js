const checker = (req, res, next) => {
    const { email } = req.headers;
    if (email.includes('@masaischool.com') === true) {
        next();
    } else {
        res.send({ msg: "Not Admin" });
    }
};

module.exports = { checker };