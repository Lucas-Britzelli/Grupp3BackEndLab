const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3001
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const blogRouter = require('./routes/blogRoutes')
app.use('/blog', blogRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
