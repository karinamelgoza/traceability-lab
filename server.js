const express = require('express')
const path = require('path')
app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log(`server up on ${port}`)
})