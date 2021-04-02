const express = require('express')
const app = express()
const mongoSchema = require("./mongoSchema")

app.use(express.json());

app.get('/', async (req, res) => {
   const logs = await mongoSchema.collection('logs').find({}).toArray()
   res.json(logs)
});

app.post('/', async (req, res) => {
   await mongoSchema.collection('logs').insertOne(req.body)
   res.status(201).json({})
});

app.delete("/", async(req, res)=>{
   await mongoSchema.collection('logs').deleteMany({});
   res.status(201).json({})
})

module.exports = app