const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.use("/static", express.static("./"));

app.listen(3000, () => {
    console.log('listening to port 3000');
})