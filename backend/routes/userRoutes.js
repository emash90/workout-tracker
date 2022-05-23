const express = require('express')
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController')
const router = express.Router()

router.route('/').get(getAllUsers).post(createUser)

router.route('/login').post(loginUser)

router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser)



module.exports = router
