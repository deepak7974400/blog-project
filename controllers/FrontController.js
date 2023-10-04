class FrontController{

    static home = async(req,res) => {
        try{
            res.render('home')
        }catch (error) {
            console.log(error)
        }
    }
    
    static About = async(req,res)=>{
        try{
            res.render('about')
        }catch(error){
            console.log(error)
        }
    }
    static Team = async(req,res)=>{
        try{
            res.render('team')
        }catch(error){
            console.log(error)
        }
    }
    static Blog= async(req,res)=>{
        try{
            res.render('blog')
        }catch(error){
            console.log(error)
        }
    }
    static contact= async(req,res)=>{
        try{
            res.render('contact')
        }catch(error){
            console.log(error)
        }
}
static login= async(req,res)=>{
    try{
        res.render('login')
    }catch(error){
        console.log(error)
    }
}
}
module.exports =FrontController