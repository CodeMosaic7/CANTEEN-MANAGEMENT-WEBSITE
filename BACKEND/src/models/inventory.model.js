import mongoose from 'mongoose';

const invenSchema = new mongoose.Schema(
    {
    
    },{
    timestamps:true
})

export const Product=mongoose.model("product",userSchema)