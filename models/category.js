const mongoose = require('mongoose')


//schema define

//schema define
const CategorySchema = new mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
    

},{timestamps:true})

const CategoryModel = mongoose.model('category',CategorySchema)
module.exports = CategoryModel