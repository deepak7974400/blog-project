const mongoose = require('mongoose')


//schema define
const blogschema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    cname:{
        type:string,
        required:true
    },
    image:{
        public_id:{
            type:string,
        },
        url:{
            type:string
        }
            
        
    },
},{timestamps:true})

const blogmodel =mongoose.model('blog',blogschema)
module.exports=blogmodel