const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/login", (req, res, next) =>{
    res.send(req.body);
})



var port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });