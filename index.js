const express=require('express');
const app=express();
const route=require("./route/route")
const cors=require('cors');
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use(route);
app.listen(5656,()=>{
    console.log("server is running on 5656....localhost...!!");
})