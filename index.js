let express = require('express'),
    app     = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(5000, ()=>{
    console.log('server is connected for sales-app navigator.geolocation')
})    