const express = require('express')
const protect = require('../middleware/authMiddleware')
const { getAllExercises, getOneExercise, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController')
const router = express.Router()



router.route('/').get(protect, getAllExercises).post(protect, createExercise)
router.route('/:id').get(protect, getOneExercise).patch(protect, updateExercise).delete(protect, deleteExercise)


module.exports = router