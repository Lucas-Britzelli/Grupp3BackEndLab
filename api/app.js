const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./blog_db')

const PORT = 3001
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
