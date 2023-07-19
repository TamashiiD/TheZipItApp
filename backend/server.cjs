// build your server here and require it from index.js
const express = require("express")
const cors = require("cors")
const server = express()


server.use(express.json())
server.use(cors());

const appRouter = require('./router.cjs') //this goes under the server


//this connects the node server to the express routing system.
server.use('/myapp' , appRouter) 
 


// DO YOUR MAGIC
server.use('*', (req, res, next)=>{
next({status: 404, message: 'not found'})
})

server.use((err, req, res, next)=> {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
