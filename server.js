const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = process.env.PORT || 3000
require('dotenv')
// const connectDB = require('./db')

// connectDB();

app.use('/static', express.static('static'))
app.engine('hbs', engine({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/view/layouts'}));
app.set('view engine', 'hbs');
app.set('views', './view');
  
app.get('/', (req, res) => {
    res.render('index', {title: 'Filteren'})
})
  
// app.get('/', (req, res) => {
//     res.render('results', { title: 'Test 1 2 3'})
// })
  
app.get('*', (req, res) => {
    res.status(404).send('Deze pagina bestaat niet... Jammer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})