console.log('node server running on port 8090✨')

const express = require('express')
const mongoose = require('mongoose')
const mongdbUri = 'mongodb://localhost:27017/gnocchis'

const app = express()
const port = 8090


mongoose.connect(mongdbUri)
    .then(() => {
        console.log('MongoDB Connected!')
    })
    .catch((err) => {
        console.error(err)
    })




const gnocchisRoutes = require('./routes/gnocchis')


app.listen(port, () => {
    console.log("express is running")
})

app.get('/', function (req, res) {
    res.send('Bienvenue sur mon api des gnocchis')
})

app.use(express.json())
app.use('/gnocchis', gnocchisRoutes)

