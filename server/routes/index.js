const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

router.get('/getuser', indexController.getUser)

module.exports = router