//create basic express server
import bodyParser from 'body-parser';
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config();
import routes from './router.js'
import session from 'express-session';
// import { getAllBooks, createBookOne, createBookMany } from './controller/Book.controller.js'

const app = express();

const port = process.env.PORT
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join('public')))


routes.forEach(route => {
    const { method, path, middleware, action } = route;
    app[method](path, ...middleware, action);

});

app.listen(port, () => {
    console.log('server started on port, ' + port);
})