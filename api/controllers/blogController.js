const {
    blogPost,
    blogGet,
    blogPut,
    blogDelete
} = require('../models/blogModel')

const addBlog = async (query) => {
    try {
        const result = await blogPost(query)
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

const getBlog = async () => {
    try {
        const result = await blogGet()
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateBlog = async (id, query) => {
    try {
        const result = await blogPut(id, query)
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteBlog = async (id) => {
    try {
        const result = await blogDelete(id)
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    addBlog,
    getBlog,
    updateBlog,
    deleteBlog
}
