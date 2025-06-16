const express = require("express");
const router = express.Router();
const {format} = require("date-fns");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: format(new Date(),"MMMM d,yyyy 'at' h:mm a"),
    },
    {
      text: "Hello World Contrary to popular belief, Lorem Ipsum is not simply random text.",
      user: "Charles",
      added: format(new Date(),"MMMM d,yyyy 'at' h:mm a"),
    }
];
//This is for routing to the index.ejs
router.get("/",(req,res)=>{
    res.render("index",{info:messages,title:"Message Board"});
});

router.get("/new",(req,res)=>{
    res.render("new",{title:"New Message"});
});
router.get("/item/:id",(req,res)=>{
    const index=req.params.id;
    const item=messages[index];
    if(item){
        res.render("item",{title:"Message Details",item:item});
    }else{
        res.status(404).send("Item not found");
    }
    
});
router.post("/new",(req,res)=>{
    messages.push({text:req.body.message,user:req.body.name,added:format(new Date(),"MMMM d,yyyy 'at' h:mm a")});
    res.redirect("/");//Sends you back to the home/index page
});

module.exports = router;