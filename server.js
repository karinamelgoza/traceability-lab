const express = require('express')
const path = require('path')
app = express()

app.use(express.json())


const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log(`server up on ${port}`)
})