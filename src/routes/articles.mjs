import express from 'express'
import {
  deleteAticleHandler,
  getAticleHandler,
  getAticlesHandler,
  postAticlesHandler,
  putAticleHandler
} from '../controllers/articles.mjs'

const articlesRouter = express.Router()

articlesRouter.get('/', getAticlesHandler)
articlesRouter.post('/', postAticlesHandler)

articlesRouter.get('/:articleId', getAticleHandler)
articlesRouter.put('/:articleId', putAticleHandler)
articlesRouter.delete('/:articleId', deleteAticleHandler)

export default articlesRouter
 