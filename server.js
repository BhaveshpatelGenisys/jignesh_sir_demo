var express = require('express');
var path = require('path');
const routers = require("./routes/index");

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/", routers);

app.listen(8000)
console.log("server runing on 8000");