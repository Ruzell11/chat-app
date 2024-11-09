require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./database/index');
const route = require("./routes/index");


const app = express();
app.use(express.json());
app.use(cors());
connectToDatabase()
app.use("/api/v1", route);


const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("WELCOME TO CHAT API :))")
})

app.listen(port, (req, res) => {
    console.log(`RUNNING ON PORT ${port}`)    
})