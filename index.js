const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


// const bookRouter = require('./routes/book.router')

// app.use("/api/v1/books", bookRouter)


const sensorData1 = require('./routes/sensorData1');
const sensorData2 = require('./routes/sensorData2');

app.use("/api/v1/table1", sensorData1);
app.use("/api/v1/table2", sensorData2);

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))