// Declaring the modules to be used in the app
require("dotenv").config()
const express = require("express")
const path = require("path")
const db = require("./db/index")
const bodyParser= require("body-parser")


const app = express()



app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, "public")))

// All get request of the projects
app.get("/", (req, res)=>{
    res.render("welcome")
})

app.get("/create", (req, res)=>{
    res.render("sign-up",{
        email : "", warning : ""
    })
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

app.get("/test/:id", async (req, res)=>{
    let user = await req.params
    console.log(user)
   const data = await db.query(`SELECT * FROM users`)
   let results = data.rows
   results.map((result)=>{
       if(result.tag_name = user){
           res.json(result)
       } else{
           res.json({
               "status" : "data not found"
           })
       }
   })

})


app.get("/emailError", (req, res)=>{
    res.render("sign-up", { email : "Email has already been used", warning : ""})
})
app.get("/passError", (req, res)=>{
    res.render("sign-up", {warning : "password does not match ", email : ""})
})

app.post("/login", async(req, res)=>{
    const body = req.params;
    let email = body.email;
    let password = body.password
    const data = db.query(`SELECT * FROM users WHERE email= $1`, [email])
    console.log(data)
    if(data){
        res.render("dashboard", {
            full_name : "", balance : ""
        })
    }else{

    }
})
// THE POST REQUESTS FOR HANDLING DATA
app.post("/dashboard", async(req, res)=>{

    // fetching the data from the users to the database
    const data = req.body
    let full_name = data.fullname;
    let email = data.email;
    let password  = data.password;
    let cpassword = data.cpassword;


    let exist = await db.query(`SELECT email FROM users`)
    let exit =await exist.rows
    let confirm = exit.map(singleMail => singleMail.email ==email)
    if(password !== cpassword){
        console.log("password not match")
        res.redirect("/passError")
    }else if(confirm[0]){
        res.redirect("/emailError")
    }
    else{
        db.query(`INSERT INTO users (email, password, full_name, balance, tag_name) VALUES ($1, $2, $3, 200000, $4)`, [email, password, full_name,"@"+full_name ])
        const profile = db.query(`SELECT * FROM users WHERE email = $1`, [email])
        console.log(profile.rows)
        res.render("dashboard", {

        })
    }
  
})
app.post("/success", (req, res)=>{
    let data = req.body
    let beneficiary = data.beneficiary;
    let ammount = data.ammount
    res.render("success", 
    {
        ammount : ammount,
        beneficiary : beneficiary
    })
})



const port = process.env.PORT || 3030
app.listen(port , ()=>{
    console.log(`Server running on the ${port}`)
})