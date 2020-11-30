var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var user = [{
    username: "ta",
    password: "1"
}, {
    username: "nodemy",
    password: "1"
}]
app.get("/user", function(req, res) {
    res.json(user)
})
app.get("/user/:username1", function(req, res) {
    var username1 = req.body.username1
    let checkUser = user.filter(function(userItem) {
        return username1 == userItem.username
    })
    if (checkUser.length) {
        return res.json(checkUser)
    } else {
        return res.json("Khong ton tai")
    }
})
app.post("/login", function(req, res) {
    var username1 = req.body.username1
    var password1 = req.body.password1
    let checkUser = user.filter(function(userItem) {
        return username1 == userItem.username && password1 == userItem.password
    })
    if (checkUser.length) {
        return res.json("Co ton tai")
    } else {
        return res.json("Khong ton tai")
    }
})
app.put("/user/:username1", function(req, res) {
    for (var i = 0; i < user.length; i++) {
        if (req.params.username1 === user[i].username) {
            user[i].password = req.body.password1
            return res.json('Cap nhat thanh cong')
        } else {
            res.json("Nhap lai username")
        }
    }
})
app.delete("/user/:username1", function(req, res) {
    var newUser = user.filter(function(userItem) {
        return userItem.username !== req.params.username1
    })
    user = newUser
    res.json("Xoa thanh cong")
})




app.listen(1911, function() {
    console.log("Server chay tai cong 1996");
})