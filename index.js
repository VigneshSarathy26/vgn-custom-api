var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
    res.json(["Tony","thala-thalapathi","Michael","Ginger","Food"]);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});