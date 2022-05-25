const Exercise = require('../models/exerciseModel')
const mongoose = require('mongoose')
const loginUser = require ('./userController')
const asyncHandler = require('express-async-handler')



const getAllExercises = asyncHandler(async(req, res) => {
    try {
        const allExercises = await Exercise.find({ username: req.user.username }).sort({createdAt:-1})
        res.status(200).json(allExercises)
    } catch (error) {
        res.status(401).json(error)
    }
})
const getOneExercise = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const oneExercise = await Exercise.findById(userId)
        if(!oneExercise) {
            res.status(401).send('no exercise with that id')
        } res.status(200).json(oneExercise)
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const createExercise = asyncHandler(async(req, res) => {
    try {
        const newExercise = new Exercise({
            username: req.user.username,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
        })
        await newExercise.save()
        console.log(newExercise);
        res.status(201).json(newExercise)
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const updateExercise = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const updatedExercise = await Exercise.findByIdAndUpdate(
            {_id: userId},
            req.body,
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedExercise)
        console.log(`upadated package is: ${updatedExercise}`);
    } catch (error) {
        res.status(404).json({message: error})
    }
})
const deleteExercise = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id
        const userToDelete = await Exercise.findByIdAndDelete(userId)
        res.status(200).json({userId})
    } catch (error) {
        res.status(404).json({message: error})
    }
})




module.exports = {
    getAllExercises,
    getOneExercise,
    createExercise,
    updateExercise,
    deleteExercise
}