const Router = require('express')
const router = new Router()
const sortController = require('../controllers/sortController')

router.post('/', sortController.create)
router.get('/', sortController.getAll)

module.exports = router
