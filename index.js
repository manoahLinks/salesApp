let express = require('express'),
    app     = express()

let sql = require('./models/sales')


app.listen(5500, ()=>{
    console.log('Sales App is serving !!!')
})    