var http = require('http');
var express = require('express');
var app = express();

app.get('/',(req,res) =>{
   res.send("Hello World");
})

http.createServer(app).listen(3000,() => {
    console.log(`server started running at port 3000`);
});