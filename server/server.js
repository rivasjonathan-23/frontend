const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors =  require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res, next) =>{
    res.send("i wanna die");
})


app.get("/login", (req, res, next) =>{
    res.send(req.body);
})



var port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });