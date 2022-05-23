const User = require('../models/userModel')
const mongoose = require('mongoose')

const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(401).json(error)
    }
}
const getOneUser = async(req, res) => {
    try {
        const userId = req.params.id
        const oneUser = await User.findById(userId)
        if(!oneUser) {
            res.status(401).send('no user with that id')
        } res.status(200).json(oneUser)
    } catch (error) {
        res.status(404).json({message: error})
    }
}
const createUser = async(req, res) => {
    try {
        const newUser = new User({
            username: req.body.username
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(404).json({message: error})
    }
}
const updateUser = async(req, res) => {
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
}
const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        const userToDelete = await User.findByIdAndDelete(userId)
        res.status(200).json({userId})
    } catch (error) {
        res.status(404).json({message: error})
    }
}

const loginUser = async(req, res) => {
    try {
        const { username } = req.body
        console.log(`the username is: ${username}`);
        const loggedIn = await User.findOne({username})
        if(!loggedIn) {
            res.status(404).json({message: error})
        }
        console.log(loggedIn);
        res.status(200).json(loggedIn)
    } catch (error) {
        res.status(404).json({message: error})
    }
   

}


module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}