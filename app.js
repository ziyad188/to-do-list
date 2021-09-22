const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));
var workItems = [];
var items = ["Buy Food","Cook Food","Eat Food"];
app.get("/", function(req,res){
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItem: items});

});

app.post("/", function(req,res){
    
    let item = req.body.newList;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/work",function(req,res){
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})
































app.listen(process.env.PORT || 3000, function(){
    console.log("server is running in port 3000");
});
