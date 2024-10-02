const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/password_generator', (req, res) => {
  res.render('index')
})

app.get('/', (req, res) => {
  res.redirect('/password_generator')
})

app.listen(port, () => {
  console.log(`express server running on http://localhost:${port}`)
})
