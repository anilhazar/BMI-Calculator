const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req,res){
  let height1 = Number(req.body.height);
  let weight1 =  Number(req.body.weight);
  let result = parseInt(weight1/(height1 * height1));
  res.send("Your BMI score is " + result );
})


app.listen(3000, function(){
    console.log("Server 3000 is on progress");
});