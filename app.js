const express = require("express");
const app = express();
const path = require("node:path");
const router = require('./routes/indexRoute');

//Neon Paas configuration
require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

http.createServer(requestHandler).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


//My code

app.set("views", path.join(__dirname, "views"));//Used for accessing views files the .ejs 
app.set("view engine", "ejs");//Used for accessing views files the .ejs 
app.use(express.urlencoded({extended:true}));//Used for accessing POST
app.use(express.static('public'));//Used for accessing public files like style.css

app.use('/',router);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`You are running on ${PORT}`);
});



