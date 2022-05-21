const express = require('express')
const { getAllExercises, getOneExercise, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController')
const router = express.Router()



router.route('/').get(getAllExercises).post(createExercise)
router.route('/:id').get(getOneExercise).patch(updateExercise).delete(deleteExercise)


module.exports = router