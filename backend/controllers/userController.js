const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')


const getAllUsers = asyncHandler(async(req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(401).json(error)
    }
})
const getOneUser = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const oneUser = await User.findById(userId)
        if(!oneUser) {
            res.status(401).send('no user with that id')
        } res.status(200).json(oneUser)
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const createUser = asyncHandler(async(req, res) => {
    try {
        const newUser = new User({
            username: req.body.username
        })
        await newUser.save()
        res.status(201).json({
            token: generateToken(newUser._id),
            username: newUser.username,
            id: newUser._id
        })
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const updateUser = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const updatedUser = await User.findByIdAndUpdate(
            {_id: userId},
            req.body,
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const deleteUser = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const userToDelete = await User.findByIdAndDelete(userId)
        res.status(200).json({userId})
    } catch (error) {
        res.status(404).json({message: error})
    }
})

const loginUser = asyncHandler(async(req, res) => {
    try {
        const { username } = req.body
        console.log(`the username is: ${username}`);
        const currentUser = await User.findOne({username})
        if(!currentUser) {
            res.status(404).json({message: error})
        }
        res.status(200).json({
            _id: currentUser.id,
            username: currentUser.username,
            token: generateToken(currentUser._id)
        })
        console.log(`this is the currentUser username: ${currentUser.username}`);
    } catch (error) {
        res.status(404).json({message: error})
    }
   

})
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    } )
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}