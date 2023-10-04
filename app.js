const express = require('express')
const app =express() //call
const port=3000
const web =require('./routes/web')
const connectDB =require('./db/connectdb')


//html css

app.set('view engine', 'ejs')

//connectdb
connectDB()
//html css link
app.use(express.static('public'))
//routing load
app.use('/',web)









//server create
app.listen(port, () => {
    console.log(`server start localhost:${port} `)
    
})
