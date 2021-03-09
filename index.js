const express = require("express");
 
const app = express();
const bodyParser = require("body-parser");
 
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname));
 
app.get("/reg", function (request, response) {
    console.log('this is pozt')
}); 

app.get("/", function(request, response){
    console.log('work')
    response.sendFile(__dirname + "/TEST.HTML")
});


 
app.listen(3001,console.log('server is starting'));