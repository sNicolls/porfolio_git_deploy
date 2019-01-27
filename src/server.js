const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const apiroutes = require('./ApiRoute')

const app = express()


app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 4000

app.use('/api', apiroutes)

const server = app.listen(port, function(){
 console.log('Listening on port ' + port)
})
