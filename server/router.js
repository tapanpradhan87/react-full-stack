import { getAllBooks, createBookOne, createBookMany } from './controller/Book.controller'

module.exports = [
    {
        method: 'get',
        path: '/api/Books/getAllBooks',
        middleware: [],
        action: getAllBooks
    },
    {
        method: 'post',
        path: '/api/Books/crateBookOne',
        middleware: [],
        action: createBookOne
    },
    {
        method: 'post',
        path: '/api/Books/createBookMany',
        middleware: [],
        action: createBookMany
    }
]
