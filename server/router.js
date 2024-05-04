import { getAllBooks, createBookOne, createBookMany } from './controller/Book.controller.js'
import { loginUser, signUpUser, getUser } from './controller/Login.controller.js'

import { jwtTokenMiddleware } from './middleware/jwtToken.middleware.js'

const routes = [
    {
        method: 'post',
        path: '/api/SignUp',
        middleware: [],
        action: signUpUser
    },
    {
        method: 'post',
        path: '/api/auth/Login',
        middleware: [],
        action: loginUser
    },
    {
        method: 'get',
        path: '/api/auth/user',
        middleware: [],
        action: getUser
    },
    {
        method: 'get',
        path: '/api/Books/getAllBooks',
        middleware: [],
        action: getAllBooks
    },
    {
        method: 'post',
        path: '/api/Books/crateBookOne',
        middleware: [jwtTokenMiddleware],
        action: createBookOne
    },
    {
        method: 'post',
        path: '/api/Books/createBookMany',
        middleware: [jwtTokenMiddleware],
        action: createBookMany
    }
]
export default routes
