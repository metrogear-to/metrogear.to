const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3002

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('homepage')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/consignment', (req, res) => {
    res.render('consignment')
})

app.get('/meetUs', (req, res) => {
    res.render('devs')
})

app.get('/productDetails', (req, res) => {
    res.render('productDetails')
})

app.get('/sale', (req, res) => {
    res.render('sale')
})

app.get('/help', (req, res) => {
    res.send('its really not that hard bro its just a website lmao')
})

app.get('/help/*', (req, res) => {
    res.send('fam how you gonna screw up tryna get to the help page...')
})

app.get('*', (req, res) => {
    res.send('404 Error')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})