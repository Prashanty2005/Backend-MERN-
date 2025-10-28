const express= require("express");

const app=express();

app.use("/abou?t",(req,res)=>{
    res.send({"name":"John","age":30});
})
//? means the preceding character is optional
//+ means the preceding character must appear at least once
// * means the preceding character can appear zero or more times
// () means the preceding character can appear in a group

app.use("/about/:id",(req,res)=>{
    console.log(req.params);
    res.send({"name":"John","age":30});
})
// :id is a route parameter


app.use("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
})

app.use("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
})


app.listen(4000,()=>{
    console.log("Server is running on port 4000");      
})


//npm i nodemon -g : to install nodemon globally