const express = require('express')
const { newItem, getAllItems, deleteItem, changeStatus } = require('../Controllers/listController')
const router = express.Router()

router.post("/",newItem)
router.get("/list", getAllItems)
router.post("/deleteOne", deleteItem)
router.post("/status", changeStatus)


module.exports = router