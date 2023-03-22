const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');
const { throws } = require('assert');

app.use(express.json());
app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
})

app.post('/upload', (req, res)=>{

    const diagram = req.body.diagram;

    const ext = req.body.ext;
    if(!diagram){
      return res.status(404).send("diagram in body is missing");
    }

    const fileName = `file.${ext}`;
    const filePath = path.join(__dirname, 'download', fileName) 

    const data = fs.writeFileSync(filePath, diagram );
    return res.send({fileName});
})

app.get('/download/:fileName', (req,res)=>{

    const fileName = req.params.fileName;
 
    if(!fileName){
      return res.status(404).send("fileName in body is missing");
    }
    const filePath = path.join(__dirname, 'download', fileName);

    return res.download(filePath);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})