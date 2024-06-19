const express = require('express')
const { newItem, getAllItems } = require('../Controllers/listController')
const router = express.Router()

router.post("/",newItem)
router.get("/list", getAllItems)


module.exports = router