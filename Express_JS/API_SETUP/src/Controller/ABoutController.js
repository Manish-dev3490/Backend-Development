
// This is controller which is collecting the request from client side and send to the model which is buisness logic layer 
function AboutPingController(req,res){
    return res.json({"msg":"hello from about controller"});
}

module.exports=AboutPingController;