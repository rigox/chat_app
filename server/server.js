const path = require('path');
const  publicPath   = path.join(__dirname,'../public')
const express =  require("express")


console.log(publicPath)

const PORT =  process.env.PORT ||  4000
const app = express();
app.use(express.static(publicPath))




app.listen(PORT);



