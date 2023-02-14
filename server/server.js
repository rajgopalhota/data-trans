const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(cors())
app.use(express.json())

const uri  = "mongodb+srv://admin:admin@cluster0.bauhtep.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const db = client.db("DB1");
const col = db.collection("COL1");

app.post('/', (req, res)=>{
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Insert Successful......")
})

// app.get('/', (req, res)=>{
//     console.log("This is get req")
// })


app.listen(8888);
console.log("Server started");
