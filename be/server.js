import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const initServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Connected to mogngoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error, "No connection to mogngoDB");
  }
};

initServer();
