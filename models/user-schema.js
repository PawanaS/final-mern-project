const mongoose =require ("mongoose");
const Schema = mongoose.Schema;
const autoIncrement= require('mongoose-auto-increment');

const uSchema= new Schema({
    name:{ type:String, required: true },
    username: { type:String, required: true },
    email: { type:String, required: true },
    phone:{ type:Number, required: true }
}, {
    timestamps: true
    })

    autoIncrement.initialize(mongoose.connection);
uSchema.plugin(autoIncrement.plugin, 'Nobs');

const Nobs= mongoose.model('Nobs', uSchema);

module.exports =Nobs;