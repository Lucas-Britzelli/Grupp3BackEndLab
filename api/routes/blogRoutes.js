const express = require('express')
const router = express.Router()
const controller = require('../controllers/blogController')

router.get('/search', async (req, res) => {
    try {
        const result = await controller.getBlog(req.query)
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await controller.getBlog()
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/addBlog', async (req, res) => {
    try {
        const result = await controller.addBlog(req.body)
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/updateBlog/:id', async (req, res) => {
    try {
        const result = await controller.updateBlog(req.params.id, req.body)
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/deleteBlog/:id', async (req, res) => {
    try {
        const result = await controller.deleteBlog(req.params.id)
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
