const Usuario=require('../model/users')


const getUserById=async(req,res)=>{
    const {userId}=req.params

    if(userId.length===24){
        Usuario.findById(userId).then((usuario)=>{
            if(!usuario){
                return res.json({mensaje:"Usuario no encontrado"});

            }else{
                const {_id,password, __v, ...resto}=usuario._doc;
                res.json(resto)
            }
        });
    }else{
        res.json({mensaje:"Estan enviando un password incorrecto"});
    }
}


module.exports=getUserById;