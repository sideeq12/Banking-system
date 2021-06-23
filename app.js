// Declaring the modules to be used in the app
const express = require("express")


const app = express()


app.get("/", (req, res)=>{
    res.send("Hello world")
})


const port = process.env.PORT || 3030
app.listen(port , ()=>{
    console.log(`Server running on the ${port}`)
})