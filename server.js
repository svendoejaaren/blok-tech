const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = process.env.PORT || 3000
const mongo = require('mongoose');
require('dotenv').config();
// const connectDB = require('./db')

// connectDB();

app.use('/static', express.static('static'))
app.engine('hbs', engine({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/view/layouts'}));
app.set('view engine', 'hbs');
app.set('views', './view');
  
app.get('/', (req, res) => {
    res.render('index', {title: 'Filteren'})
})

app.post('/', (req, res) => {
  res.redirect('/resultaten')
})

app.get('/resultaten', (req, res) => {
  res.render('results', {title: 'Resultaten'})
})
  
app.get('*', (req, res) => {
    res.status(404).send('Deze pagina bestaat niet... Jammer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})