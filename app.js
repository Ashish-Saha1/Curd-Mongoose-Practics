const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routeHandler = require('./RouteHandler/routeHandler');



//database connect
mongoose.connect(`mongodb://localhost/CurdPractics`)
    .then(()=>console.log('Database Connect successfully'))
    .catch((err)=>console.log(err))
    

// Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Router
app.use('/', routeHandler)



//Error handle

app.use((err,req,res,next)=>{
    if(req.headersSent){
        return next(err)
    }

    res.status(500).json({ErrHandler: err})
})


app.listen(3000, ()=> console.log('Listing on port 3000'))




