const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./blog_db.js')

const PORT = 3001
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const blogRouter = require('./routes/blogRoutes')
app.use('/blog', blogRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
connectDB()
    .then(() => {
        console.log('db connection succeeded')
    })
    .catch((err) => console.log(err))
