const express = require('express');
const cors = require("cors");

const app = express()

app.use(express.json())
app.use(cors())

app.get("/adduser", (req:any, res:any) =>{
    console.log(req.body)
    res.send('Respose Recieved:' + req.body)
})

app.listen(4000, () => console.log('server is on localhost: 4000'))