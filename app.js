import express from "express";
import dotenv from "dotenv";
import initDB from "./backend/config/db.js";



dotenv.config();
const app = express();
initDB()


app.get("/", (req , res) => (
    res.send("hello form shan e-com")
));


const port = process.env.PORT || 7000;


app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`);
});