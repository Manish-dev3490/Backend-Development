// This is controller which is collecting the request from client side and send to the model which is buisness logic layer 
function AboutPagePingController(req,res){
    return res.json({"msg":"hello BAccho from About pAge"});
}

module.exports=AboutPagePingController;