const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('static'))
app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './view');
  
app.get('/', (req, res) => {
    res.render('results')
})
  
app.get('/results', (req, res) => {
    res.status(200).send('Resultaten')
})
  
app.get('*', (req, res) => {
    res.status(404).send('Deze pagina bestaat niet... Jammer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})