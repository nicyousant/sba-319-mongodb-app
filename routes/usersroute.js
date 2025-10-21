import express from 'express'

import userController from '../controllers/usersctrl.js'

const router = express.Router()

router.get('/', userController.index)
router.get('/new', userController.new)
router.delete('/:id', userController.delete)
router.put('/:id', userController.update)
router.post('/create', userController.create)
router.get('/:id/edit', userController.edit)
router.get('/seed', userController.seed)
router.get('/:id', userController.show)

export default router