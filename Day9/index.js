const express= require("express");
const app= express();
const {auth}= require("./middleware/auth")

//Database:array
app.use(express.json());
const foodMenu = [
  { id: 1, food: "Chouemin", category: "veg", price: 500 },
  { id: 2, food: "Paneer Butter Masala", category: "veg", price: 220 },
  { id: 3, food: "Chicken Biryani", category: "non-veg", price: 280 },
  { id: 4, food: "Masala Dosa", category: "veg", price: 150 },
  { id: 5, food: "Egg Curry", category: "non-veg", price: 200 },
  { id: 6, food: "Veg Manchurian", category: "veg", price: 180 },
  { id: 7, food: "Fish Fry", category: "non-veg", price: 300 },
  { id: 8, food: "Rajma Chawal", category: "veg", price: 160 },
  { id: 9, food: "Mutton Rogan Josh", category: "non-veg", price: 350 },
  { id: 10, food: "Aloo Paratha", category: "veg", price: 100 },
  { id: 11, food: "Chicken Tikka", category: "non-veg", price: 250 },
  { id: 12, food: "Hakka Noodles", category: "veg", price: 190 },
  { id: 13, food: "Pav Bhaji", category: "veg", price: 130 },
  { id: 14, food: "Butter Chicken", category: "non-veg", price: 320 },
  { id: 15, food: "Dal Makhani", category: "veg", price: 210 }
];

app.use("/admin",auth)
//let consider a user add some food items to cart
const AddToCart= [];

//all fooditems will be seen by user and admin 
app.get("/food",(req,res)=>{
    res.status(200).send(foodMenu);//to add status code
})
app.delete("/admin/:id",(req,res)=>{
    // console.log(req.params)
    try{
        const id= parseInt(req.params.id);
        const itemToDelete=foodMenu.findIndex(item => item.id===id);
        if(itemToDelete===-1)
        {
            res.send("item not present")
        }
        else{
            foodMenu.splice(itemToDelete,1);
            res.send("successfully Deleted");
        }
    }
    catch(error){
        res.send("some errr has occured"+error);
    }
})
app.post("/admin",(req,res)=>{
        foodMenu.push(req.body);
        res.status(201).send("item added successfully")
})

app.patch("/admin",(req,res)=>{

        const id= req.body.id;
        const data= foodMenu.find(item => item.id===id);
        if(data)
        {
            if(req.body.food)
                data.food= req.body.food;
            if(req.body.category)
                data.category=req.body.category;
            if(req.body.price)
                data.price=req.body.price;

            res.status(201).send("successfully updated")
        }
        else{
            res.send("food item not in database");
        }
})

//-----------------user side----------------------//
app.get("/user",(req,res)=>{
    if(AddToCart.length)
    res.send(AddToCart);
    else
        res.send("cart any item");
})

app.post("/user/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const data= foodMenu.find(item => item.id===id);
    if(data)
    {
        AddToCart.push(data);
        res.status(200).send("successfully added to cart");
    }
    else{
        res.send("particular item not exist");
    }
})

app.delete("/user/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const Did= AddToCart.findIndex(item => item.id===id);
    if(Did)
    {
        AddToCart.splice(Did,1);
        res.send("item successfully Deleted");
    }
    else{
        res.send("item does not added in cart");
    }
})

app.get("/dummy",(req,res)=>{
    //this throws error if it is not in json format
    try{
    JSON.parse("invalid json");
    res.send("hello coder bhai");
    }
    catch(err){
        res.send("some error has occured");
    }
})

app.listen(3000,()=>{
    console.log("Listening at 3000");
})



//authentication:verification if you are right user
//authorization: how much power i have in that application

