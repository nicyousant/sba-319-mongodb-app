import express from 'express'

import recController from '../controllers/recctrl.js'

const router = express.Router()

router.get('/', recController.index)
router.get('/new', recController.new)
router.get('/seed', recController.seed)
router.post('/create', recController.create)
router.get('/:id/edit', recController.edit)
router.put('/:id', recController.update)
router.delete('/:id', recController.delete)
router.get('/:id', recController.show)

export default router