const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const RegisterModel = require("./models/user_models")

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000



mongoose.connect("mongodb+srv://MrShorno:shorno.420@cluster0.kjbkf9l.mongodb.net/user")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register',(req, res) => {
    RegisterModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
} )

app.post("/login", (req,res)=>{
    const {email, password} =req.body;
    RegisterModel.findOne({email: email})
        .then(user =>{
            if(user){
                if (user.password === password){
                    res.json("Success")
                } else {
                    res.json("The password is wrong")
                }
            }else {
                res.json("No record")
            }
        })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})