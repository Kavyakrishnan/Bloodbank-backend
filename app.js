const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const { default: mongoose } = require("mongoose")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var BloodModel=Mongoose.model("bloods",
    new mongoose.Schema(

        {
            name: String,
            address: String,
            bloodgroup: String,
            mobile: String,
            username: String,
            password: String,
        }
    ))
    Mongoose.connect("mongodb+srv://gopika:1234@cluster0.2q4qp.mongodb.net/bloodappdb")
    app.get("/api/viewall",(req,res)=>{
        BloodModel.find((error,data)=>{
            if(error){
res.send({"status":"error"})
            }
            else
            {
res.send({"status":"success","data":data})
            }
        })
    })
app.post("/api/bloodapp",(req,res)=>{
    var data=req.body
    let ob=new BloodModel(data)
    ob.save((error,data)=>{
        if(error){
res.send({"status":"error","error":error})
        }
        else{
            res.send({"status":"success","data":data})

        }
    })


})
app.listen(4001,()=>{
    console.log("server is running")

})