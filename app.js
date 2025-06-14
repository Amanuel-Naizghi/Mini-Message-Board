const express = require("express");
const app = express();
const path = require("node:path");
const router = require('./routes/indexRoute');

app.set("views", path.join(__dirname, "views"));//Used for accessing views files the .ejs 
app.set("view engine", "ejs");//Used for accessing views files the .ejs 
app.use(express.static('public'));//Used for accessing public files like style.css
app.use(express.urlencoded({extended:true}));//Used for accessing POST

app.use('/',router);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`You are running on ${PORT}`);
})