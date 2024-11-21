import mongoose, { Schema, model } from "mongoose";
const basketSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: "baskets",
        timestamps: true
    });
export default model("Basket", basketSchema);