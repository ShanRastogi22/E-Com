import express from "express";
import dotenv from "dotenv";
import initDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";




dotenv.config();
const app = express();
app.use(express.json());
initDB()


app.get("/api", (req , res) => (
    res.send("hello form shan e-com")
));

app.use("/api/users", userRoutes);

const port = process.env.PORT || 7000;


app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`);
});