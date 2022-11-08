const Router = require('express')
const router = new Router()
const teaController = require('../controllers/teaController')

router.post('/', teaController.create)
router.get('/', teaController.getAll)
router.get('/:id', teaController.getOne)

module.exports = router
