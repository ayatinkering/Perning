import express from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

// Get all todos for logged-in user
router.get('/', async (req, res) => {
    const todos = await prisma.todo.findMany({
        where: {
            userId: req.userId
        }
    })

    res.json(todos)
})

// Create a new todo
router.post('/', async (req, res) => {
    const { task } = req.body

    const todo = await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.json(todo)
})

// Update a todo
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
    const todoId = parseInt(id)

    try {
        const todo = await prisma.todo.findUnique({
            where: { id: todoId }
        })

        if (!todo) {
            return res.status(404).send({ message: "Todo not found" })
        }

        if (todo.userId !== req.userId) {
            return res.status(403).send({ message: "Access denied" })
        }

        const updatedTodo = await prisma.todo.update({
            where: { id: todoId },
            data: {
                completed: !!completed
            }
        })
        res.json(updatedTodo)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(500)
    }
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    const todoId = parseInt(id)

    try {
        const todo = await prisma.todo.findUnique({
            where: { id: todoId }
        })

        if (!todo) {
            return res.status(404).send({ message: "Todo not found" })
        }

        if (todo.userId !== userId) {
            return res.status(403).send({ message: "Access denied" })
        }

        await prisma.todo.delete({
            where: { id: todoId }
        })

        res.send({ message: "Todo deleted" })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(500)
    }
})

export default router