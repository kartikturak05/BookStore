import express from "express"
import dotenv from "dotenv"

const app = express();

dotenv.config();

const port = process.env.port||4000


app.get("/",(req,res)=>{
    res.send("Hii world");
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
