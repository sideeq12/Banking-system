// Declaring the modules to be used in the app
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
// app.set("views", path.join(__dirname, "views"))
// app.set("views", "./views")


app.get("/", (req, res)=>{
    res.render("welcome")
})


const port = process.env.PORT || 3030
app.listen(port , ()=>{
    console.log(`Server running on the ${port}`)
})