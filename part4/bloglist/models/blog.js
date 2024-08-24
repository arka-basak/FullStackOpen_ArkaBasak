const config = require('../utils/config')
const logger = require('../utils/logger')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        logger.info(`successfully connected to MongoDB`)
    })
    .catch((error)=>{
        logger.error(`could not connect to MongoDB`, error)
    })


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

  module.exports = mongoose.model('Blog', blogSchema)