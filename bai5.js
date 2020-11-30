var express = require('express')
var bai5 = express()


obj = { name: " nodemy " }

bai5.get("/bai5", function(req, res) {
    res.json(obj)
})


bai5.get("/bai5/name", function(req, res) {
    function add(obj) {
        obj.age = "20"
    }
    res.json(obj)
})
bai5.listen(3000, function() {
    console.log("Bai 5 dang chay tai cong 3000");
})