
import { mongoCreateUserOne, mongoFindUserOne } from '../database/dbConnector.js'

import jwt from 'jsonwebtoken'

export const signUpUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const existingUser = await mongoFindUserOne({ email: email })
        if (existingUser)
            res.send({ messge: "Already user exists with this email" })
        const createdUser =
            await mongoCreateUserOne({ email: email, password: password })
    } catch (e) {
        res.send('internal server error');
    }
}

export const loginUser = async (req, res) => {
    debugger
    const { username, password } = req.body;
    try {
        console.log(username + " " + password)
        const user = await mongoFindUserOne(username)
        if (!user) {
            res.status(401).json({ message: "Invalid Credentials", ok: false });
        } else {
            req.session.user = user;
            req.session.save();
            res.json({ message: "Logged in", ok: true, user });
        }
        // const existingUser = await mongoFindUserOne(email)
        // //const jwtSecretKey = process.env.JWT_SECRET_KEY;
        // // const data = {
        // //     time: Date(),
        // //     userId: existingUser.email,
        // // }
        // req.session.user = existingUser;
        // //const token = jwt.sign(data, jwtSecretKey);
        // res.json({ authentication: true, ok: 1 })
        // // res.json({ access_token: token });
    } catch (e) {
        res.send('internal server error');
    }
}

export const getUser = async (req, res) => {
    console.log('called')
    if (req.session.user) {
        res.json({ message: "User logged in", ok: true, user: req.session.user });
    } else {
        res.json({ message: "No user logged in", ok: false });
    }
}
export const logout = async (req, res) => {
    req.session.destroy(() => {
        res.json({ authentication: false, ok: 1 })
    })
}

