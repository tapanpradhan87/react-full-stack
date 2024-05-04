import { mongoFindUserOne } from '../database/dbConnector.js'


export const jwtTokenMiddleware = (req, res, next) => {
    const { 'Authorization': token } = req.headers;
    try {
        if (!token)
            res.staus(401).send({ message: 'Unauthorised' })
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            next()
        } else {
            // Access Denied
            return res.status(401).send(error);
        }

    } catch (e) {
        res.staus(401).send({ message: 'Unauthorised' })
    }
}

