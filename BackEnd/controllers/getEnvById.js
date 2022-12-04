const Envios = require("../model/envios");

const obtenerEnvById = async (req, res) => {
    const {id}=req.params

    if(id.length===24){
        Envios.findById(id).then((envio)=>{
            if(!envio){
                return res.json({mensaje:"envio no encontrado"});

            }else{
                const {_id,password, __v, ...resto}=envio._doc;
                res.send(envio)
            }
        });
    }else{
        res.json({mensaje:"Estan enviando un password incorrecto"});
    }
}


  module.exports =  obtenerEnvById;