import { verify } from '../tools/jwt.js';

const checkToken = (req, res, next) => {


    const token = req.cookies?.refreshToken;


    if (!token) {
        return res.status(401).json({ error: "Token required!" });
    }

    try {
        const decoded = verify(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid token!" });
    }
};

export default checkToken;
