import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db_connection.js";

connectDB()
.then(()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`Server is running on port ${process.env.port || 8000}`);
    })
})
.catch((error)=>{
    console.error("Failed to connect to the database:", error);
})