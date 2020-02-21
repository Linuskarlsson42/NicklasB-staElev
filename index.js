const express = require('express')
const app = express()
const port = 3000

var clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'Uppgift1.html')
})
app.listen(port, () => console.log(`Example app listening on port port!`))

app.get('/Uppgift1.css', (req,res) => {
  res.sendFile(clientDir + 'Uppgift1.css' )
})

app.get('/heh', (req,res)=>{
  res.sendFile(clientDir + 'ChicksHiggis.jpg')
})

app.post('/form', (req,res) =>{
  const name = req.body.name
  console.log(name)
})