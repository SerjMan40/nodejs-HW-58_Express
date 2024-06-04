import express from 'express'
import { deleteUserIdHandler, getUserIdHandler, getUsersHandler, postUsersHandler, putUserIdHandler } from '../controllers/users.mjs'

const usersRouter = express.Router()

usersRouter.get('/', getUsersHandler)
usersRouter.post('/', postUsersHandler)

usersRouter.get('/:userId', getUserIdHandler)
usersRouter.put('/:userId', putUserIdHandler)
usersRouter.delete('/:userId', deleteUserIdHandler)

export default usersRouter
