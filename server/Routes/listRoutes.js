const express = require('express')
const { newItem } = require('../Controllers/listController')
const router = express.Router()

router.post("/",newItem)

module.exports = router