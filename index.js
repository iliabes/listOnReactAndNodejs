const express = require("express");
 
const app = express();
const bodyParser = require("body-parser");
 
const urlencodedParser = bodyParser.urlencoded({extended: false});

// app.use(express.static(__dirname + "/build"));
 
app.get("/reg", function (request, response) {
    console.log('this is pozt')
}); 

app.get("/", function(request, response){
    console.log('work')
    response.sendFile(__dirname + '/build/index.html')
});


 
app.listen(3002,console.log('server is starting'));