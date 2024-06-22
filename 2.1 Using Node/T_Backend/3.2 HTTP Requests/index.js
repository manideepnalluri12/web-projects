import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1> Hello World <h1> ");
})
app.get("/about",(req, res)=>{
    res.send("<h2>about<h2>");
})
app.get("/contact",(re,res)=>{
    res.send("<h3>Google<h3>");
})


app.listen(port, () =>{
    console.log("Server is running on port "+port);
})


