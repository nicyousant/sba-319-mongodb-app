import express from 'express'

import destController from '../controllers/destctrl.js'

const router = express.Router()

router.get('/', destController.index)
router.get('/new', destController.new)
router.get('/seed', destController.seed)
router.post('/create', destController.create)
router.get('/:id/edit', destController.edit)
router.put('/:id', destController.update)
router.delete('/:id', destController.delete)
router.get('/:id', destController.show)

export default router