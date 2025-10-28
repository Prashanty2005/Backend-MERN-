
const response= await fetch("http://localhost:4000/",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'//what type of data we are sending 
    },  
    body:JSON.stringify({name:"prashant",age:21})//which data we want to send
});

//there is no need to mension method when get method is used 

//json.stringify is used to convert js object to json object
