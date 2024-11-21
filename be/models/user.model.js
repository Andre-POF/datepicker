import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: (props) => `${props.value} non è una email valida!`,
        },
    },
    birthdate: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        validate: {
            validator: function (v) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
            },
            message: (props) => `${props.value} non è una password valida!`,
        },
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    avatar: {
        type: String,
        required: true,
        default: () => "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
    {
        collection: "users",
        timestamps: true,
    });
export default model("User", userSchema);