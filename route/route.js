const route=require('express').Router();

const data=require('../Data/alldata');

route.get("/",(req,res)=>{
    res.send({msg:"hello prepbytes"});
})
route.get("/bollywood",data.bollywood);
route.get("/hollywood",data.hollywood);
route.get("/fitness",data.fitness);
route.get("/food",data.food);
route.get("/technology",data.technology);

module.exports=route;