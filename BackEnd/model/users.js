const{ model,Schema}=require("mongoose");

const UsuarioSchema=new Schema({
    nombre:{type:String, required: true},
    username:{type:String, required: true},
    correo:{type:String, required: true, unique:true},
    password:{type:String, required: true},

});

module.exports=model('usuario',UsuarioSchema)