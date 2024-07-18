// This is controller which is collecting the request from client side and send to the model which is buisness logic layer 
function HomePingController(req,res){
    return res.json({"msg":"hello BAccho"});
}

module.exports=HomePingController