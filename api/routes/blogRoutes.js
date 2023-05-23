const express = require('express')
const router = express.Router()
const ArticleLength = require('../service/ArticleSize')

const db = require('../blog_db.js')

router.post('/ArticleLength', async (req, res) => {
    try {
        const articleText = req.body.content // Antagande: Artikeltexten finns i 'content'-fältet i request body
        const result = await ArticleLength(articleText)
        res.json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        let data = await db.GetAll()
        return res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const data = req.body
        const result = await db.addPost(data)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})

router.delete('/remove', async (req, res) => {
    let _id = req.body._id
    try {
        await db.deleteOne(_id)
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

module.exports = router
