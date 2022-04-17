const express = require("express");
const app = express();
const cors = require("cors")
const connect = require("./connect/db")

const userController = require("./controllers/userControl")
const flatController = require("./controllers/flatControl");

app.use(express.json());
app.use(cors());

app.use("/flat", flatController)
app.use("/user", userController)

const PORT = 8080
app.listen(PORT, async()=>{
    try{
       await connect();
        console.log(`Listening to Port no: ${PORT} `)
    }catch(err){
        console.log(err)
    }

})


