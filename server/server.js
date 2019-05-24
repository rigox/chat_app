const path = require('path');
const  publicPath   = path.join(__dirname,'../public')
const express =  require("express")
const  socketIO =  require("socket.io");
const http  = require("http")
console.log(publicPath)

const PORT =  process.env.PORT ||  4000
const app = express();
var  server  =  http.createServer(app)
var io = socketIO(server)


app.use(express.static(publicPath))
io.on('connection',(socket)=>{
     console.log("new user connected")
});


io.on('disconnect',(socket)=>{
    console.log("diconnected")
});




server.listen(PORT,()=>{
       console.log(`server is running up on ${PORT}`)
})


//app.listen(PORT);



