const express = require('express')
const path = require('path')
const { Info, sequelizeInstance } = require('./models')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/find/:telephone', async (req, res) => {
  const info = await Info.find({ where: { telephone: req.params.telephone } })
  if (!info) return res.json({ result: 404 })
  return res.json({ result: info.id })
})

sequelizeInstance.sync()

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

