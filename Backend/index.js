import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();

const port = process.env.port||4000
const MongodbURi = process.env.MongodbURi;
//Connect to database mongodb

try {
    mongoose.connect(MongodbURi);
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Error : ",error);
}

// Defining routes
app.use("/",bookRoute)
app.use("/user",userRoute)

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
