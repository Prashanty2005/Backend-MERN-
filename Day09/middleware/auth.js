const auth=(req,res,next)=>{
    //to differentiate if it is admin or random user we need authenticaion
    //dummy code to authenticate
    const token= "ABCDF";
    const Access = token==="ABCDF"?1:0;

    if(!Access)
    {
        res.status(403).send("no permission")
    }
    next();
}

module.exports={auth};
