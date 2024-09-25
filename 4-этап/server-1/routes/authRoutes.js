const express = require('express');
const {register, login, logout, forgotPassword} = require('../controllers/authCtrl')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.post('/forgot', forgotPassword)

module.exports = router