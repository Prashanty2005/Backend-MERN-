const express= require("express");
const app=express();

const Bookstore=[
    {id:1,name:"Book1",author:"Author1"},
    {id:2,name:"Book2",author:"Author2"},
    {id:3,name:"Book3",author:"Author3"},
    {id:4,name:"Book4",author:"Author4"},
    {id:5,name:"Book5",author:"Author5"}
]
app.use(express.json());//every data that is coming will first converted into json
// //localhost:3000/book/3
//usne book ko dekha pahale to wo 3 ko uske ander dhondega , bakiyo me ham jaisa soach rahe hai waisa hi hoga
// app.use("/book",(req,res)=>{
//     res.send(Bookstore);
// })

// //now i want information about a particular book
// app.use("/book/:id",(req,res)=>{
//     const id= parseInt(req.params.id);
//     const book= Bookstore.find(info=> info.id===id);
//     res.send(book);
// })



app.get("/book",(req,res)=>{
    res.send(Bookstore);
})

//now i want information about a particular book
app.get("/book/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const book= Bookstore.find(info=> info.id===id);
    res.send(book);
})

app.post("/book",(req,res)=>{
    Bookstore.push(req.body);
    res.send("data saved successfully");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");      
})


// jab route match honge app.use alag tarah se implement hoga
//app.get app.post app.patch app.put app.delete alag tarah se hoga





















// // app.use("/user",(req,res)=>{
// //     res.send("hello prashant");
// // })

// app.get("/user",(req,res)=>{
//     console.log(req);
//     res.send("hello prashant");
// })

// app.listen(4000,()=>{
//     console.log("Server is running on port 4000");      
// })

// app.post("/user",(req,res)=>{
//     console.log("Post request received");
//     res.send("Post request received");
// }   )
