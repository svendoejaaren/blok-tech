const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('static'))
  
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})
  
app.get('/results', (req, res) => {
    res.status(200).send('<h1>Resultaten</h1>')
})
  
app.get('/song', (req, res) => {
    res.status(200).send('<h1>Layla</h1>')
})
  
app.get('*', (req, res) => {
    res.status(404).send('Deze pagina bestaat niet... Jammer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})