let express = require('express'),
    app     = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.get('/', async(req, res)=>{
    res.render('index')
})

app.listen(4400, ()=>{
    console.log('server is connected for sales-app navigator.geolocation')
})    