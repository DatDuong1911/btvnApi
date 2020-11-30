var express = require('express')
var bai1 = express()

bai1.get('/', function(req, res) {
    res.sendFile('./trangChuBai1.html')
})
bai1.get('/login', function(req, res) {
    res.sendFile('./Bai1/bai1Login.html')
})

bai1.get('/download', function(req, res) {
    res.download('./Bai1/FGOCostume-Showcase-Casual-MordredMemories-of-TrifasFateGrand-Order.jpg')
})


bai1.listen(8000, function() {
    console.log('bai 1 chay tai cong 8000');
})