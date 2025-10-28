const express= require("express");
const app= express();

// route Handler:callback function inside that
app.use("/user",(req,res,next)=>{
    // res.send("Hello Prashant") // one client has only one response
    res.send("Hello Prashant")
    // this does not mean we are returning anything
    next();// calls to execute next
},
//only first will run second will not run
(res,req,next)=>{
    console.log("second")
    res.send("Hello I am Second")
    next()
},
(req,res)=>{
    console.log("thire");
    res.send("I am third");
}
)



app.listen(5000,()=>{
    console.log("listening at port 5000")
})

//middleware: in between all the steps are called middleware 
// it does operations in middle of any route handle does not send response
// the response which sends is the route handler or request handler
//middleware:mw->mw->mw-> request handler


