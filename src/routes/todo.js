import express from 'express'
import { Mongoose } from 'mongoose'
import Todo, {validateToDo} from '../models/todo'

const router = express.Router()

router.post('/', async (req, res) => {
    // validate using Joi, with factoring function
    const { error } = validateToDo(req.body)
  
    // if have any error then return bad request with error else just add the new one
    if (error) {
      return res.status(400).json({
        success: false,
        data: [],
        message: error?.details[0]?.message,
      })
    }
  
    let todo = new Todo({
      title: req?.body?.title,
      completed: false,
    })
  
    todo = await todo.save()
  
    return res.json({
      success: true,
      data: todo,
      message: 'New todo adding successful!',
    })
})

router.get('/', async (_req, res) => {
    // sending all data to response
    const todos = await Todo.find()
  
    return res.json({
      success: true,
      data: todos,
      message: 'Request successful!',
    })
})

export default router