import mongoose from "mongoose";

function initDB() {
    if(mongoose.connections[0].readyState) {
        console.log('server already conneced')
        return
    }
    mongoose.connect(process.env.MONGO_URL,{});
    mongoose.connection.on("connected", () => {
        console.log('MongoDB server start')
    })
    mongoose.connection.on("error", () => {
        console.log("server has error")
    })

};

export default initDB;