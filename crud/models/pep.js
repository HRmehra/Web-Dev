const mongoose =require ('mongoose')


const pepschema = new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    human:{
        type:Boolean,
        required:true,
        default:false
    }
    
})

module.exports =mongoose.model('Pep',pepschema)