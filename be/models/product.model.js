import mongoose, { Schema, model } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Confermato', 'Annullato', 'In attesa'],
        default: 'In attesa'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: "products",
        timestamps: true
    });
export default model("Product", productSchema);