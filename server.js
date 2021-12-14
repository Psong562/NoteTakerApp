const express = require('express')
const path = require('path')
const app = express()

// Static home page and ability to use JSON Data
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// linking router 
app.use(require('./routes/noteRoutes.js'))


// get /notes returns notes.html
app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

// get * returns index.html
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// port 3000 to be used for Heroku app
const PORT = process.env.PORT || 3000;
app.listen(PORT)

// app.listen(3000)