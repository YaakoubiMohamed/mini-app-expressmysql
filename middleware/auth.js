const jwt = require('jsonwebtoken');
const config = require('../config/secret')

exports.verifyToken = (req, res, next) => {
    // Get token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "aucun jeton(token) fourni" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: "Jeton(token) invalide" })
        }

        req.user = decoded;

        next();
    });

}


exports.checkRole = (role) => (req, res, next) => {
    // entreprise || admin
    console.log(req.user.role)
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'You are not authorized to perform this action.' })
    }
    next();
}