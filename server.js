const express = require('express')
const app = express()
const path = require('node:path')
const multer = require('multer')
const { mergePdfs } = require('./merge')

const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))


const port = 5500


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'))
  res.sendFile(path.join(__dirname, 'templates/style.css'))
})
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'))
})


app.post('/merge', upload.array('pdfs', 2), async(req, res, next) =>{

 let d=await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  res.redirect(`http://localhost:5500/static/${d}.pdf`);
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})