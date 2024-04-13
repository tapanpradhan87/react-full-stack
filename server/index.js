//create basic express server
import bodyParser from 'body-parser';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import routes from './router.js'
// import { getAllBooks, createBookOne, createBookMany } from './controller/Book.controller.js'

const app = express();
const port = process.env.PORT

// const routes = [
//     {
//         method: 'get',
//         path: '/api/Books/getAllBooks',
//         middleware: [],
//         action: getAllBooks
//     },
//     {
//         method: 'post',
//         path: '/api/Books/crateBookOne',
//         middleware: [],
//         action: createBookOne
//     },
//     {
//         method: 'post',
//         path: '/api/Books/createBookMany',
//         middleware: [],
//         action: createBookMany
//     }
// ]


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


routes.forEach(route => {
    const { method, path, middleware, action } = route;
    app[method](path, ...middleware, action);

});

app.listen(port, () => {
    console.log('server started on port, ' + port);
})