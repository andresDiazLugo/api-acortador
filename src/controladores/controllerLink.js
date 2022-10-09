const {Link} = require('../db/connection')


module.exports={
   /* Creating a random word and adding it to the url. */
    postUrl: async (req,res)=>{
        const {url} = req.body
        let word = ""
 for(let i = 0; i <= 3; i++){   
    let number = Math.floor(Math.random() * 10); 
    let randomWord = String.fromCharCode(97 + number);
    word = word + randomWord;
 }
        try {
            const createRegisterTableLink= await Link.create({
                url,
                shortener: process.env.URL+word ||"http://localhost:3001/"+word
            })
            res.status(200).json(createRegisterTableLink)
        } catch (error) {
            res.status(404).json({
                msg: `error ${error}`
            })
        }
    },

    /* Getting the url from the params and then searching for the url in the database. If it finds the
    url it will redirect to the url. */
    getUrl: async(req,res)=>{
        const {url} = req.params
   
        try {
            const searchRegisterTableLink = await Link.findOne({
                where:{
                    shortener:process.env.URL+url  
                }
            })
            
            if(searchRegisterTableLink){
                const {url} = searchRegisterTableLink
                res.redirect(url)
            }
        } catch (error) {
            res.status(404).json({
                msg:'error al encontrar la direccion url'
            })
        }
       

    }
}