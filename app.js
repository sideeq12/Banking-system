// Declaring the modules to be used in the app
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const db = require("./db/index")
const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))


// All get request of the projects
app.get("/", (req, res)=>{
    res.render("welcome")
})

app.get("/create", (req, res)=>{
    res.render("sign-up")
})

app.get("/login", (req, res)=>{
    res.render("signin")
})

app.get("/transfer", (req, res)=>{
    res.render("send")
})

app.get("/withdraw", (req, res)=>{
    res.render("withdraw")
})
app.get("/dashboard", (req, res)=>{
    res.render("dashboard")
})
app.get("/database", (req, res)=>{
    res.json({
        data : {
            id : 1,
            "status" : "success",
            "value" : "transactions",
            "sender": "@sideeq12",
            "beneficiary" : "@Alowonle"
        }
    })
})
app.get("/test", async (req, res)=>{
   const data = await db.query(`SELECT * FROM users`)
   res.json(data)
})

// THE POST REQUESTS FOR HANDLING DATA
app.post("/dashboard", (req, res)=>{
    res.render("dashboard")
})
app.post("/success", (req, res)=>{
    res.render("success")
})



const port = process.env.PORT || 3030
app.listen(port , ()=>{
    console.log(`Server running on the ${port}`)
})