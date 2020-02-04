const { rastro } = require('rastrojs')
const express = require('express')
const porta = 4000
const app = express()

app.use('/:codigo', async (req, res) => {
  const codigo = req.params.codigo
  //   console.log(codigo)
  const track = await rastro.track(codigo)
  res.status(200).json(track)
})

app.listen(porta, () => {
  console.log(`rodando em http://localhost:${porta}`)
})
