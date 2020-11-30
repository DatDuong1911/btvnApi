var express = require('express')
var bai4 = express()
var bodyParser = require('body-parser')
bai4.use(bodyParser.urlencoded({ extended: false }))
bai4.use(bodyParser.json())
var array = [{
        id: 1,
        name: "Phong",
        password: "1",
        address: "HN"
    }, {
        id: 2,
        name: "Sang",
        password: "1",
        address: "HP"
    },
    {
        id: 3,
        name: "Tan",
        password: "1",
        address: "Bắc Ninh"
    },
    {
        id: 4,
        name: "Dũng",
        password: "1",
        address: "TQ"
    },
]

bai4.get("/array", function(req, res) {
    res.json(array)
})

bai4.get("/array/:id1", function(req, res) {
    var id1 = req.params.id1
    let checkUser = array.filter(function(userItem) {
        return id1 == userItem.id
    })
    if (checkUser.length) {
        return res.json(checkUser)
    } else {
        return res.json("Khong ton tai")
    }
})


bai4.put("/array/:id1", function(req, res) {
    for (var i = 0; i < array.length; i++) {
        if (req.params.id1 == array[i].id) {
            array[i].name = req.params.name1
            array[i].address = req.params.address1
            res.json("Da cap nhat")
        }

    }
})

bai4.delete("/del/:id1", function(req, res) {
    var newArray = array.filter(function(arrayItem) {
        return arrayItem.id !== req.params.id1
    })
    array = newArray
    res.json("Xoa thanh cong")
})


bai4.get("/login/:id1/:password1", function(req, res) {
    var id1 = req.params.id1
    var password1 = req.params.password1
    let checkArray = array.filter(function(arrayItem) {
        return id1 == arrayItem.id && password1 == arrayItem.password
    })
    if (checkArray.length) {
        return res.json(checkArray)
    } else {
        return res.json("Kiem tra lai ten id hoac mat khau")
    }
})



bai4.listen(2020, function() {
    console.log("Bài 4 chạy tại cổng 2020");
})