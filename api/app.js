const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3001
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const blog = require('./routes/blogRoutes.js')
app.use('/blog', blog)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
