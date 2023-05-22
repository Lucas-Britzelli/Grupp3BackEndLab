const express = require('express')
const router = express.Router()
const ArticleLength = require('../service/ArticleSize')

const db = require('../blog_db')

router.post('/ArticleLength', async (req, res) => {
    try {
        const article = await ArticleLength(req.body)
        res.json(article)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const posts = await db.getAll()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const post = await db.addPost(req.body)
        res.json(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/remove', async (req, res) => {
    let blogId = req.body.blogId
    try {
        await db.deleteOne(blogId)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.put('/update', async (req, res) => {
    try {
        const { _id, ...UpdatedData } = req.body

        let blogUpdateReponse = await db.updateOne(blogId, UpdatedData)
        res.json(blogUpdateReponse)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.eports = router
