const express = require('express')
const path = require('path')
app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
    accessToken: 'ab64c159cd434a9e9f6ab7f808e0a99c',
    captureUncaught: true,
    captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
// rollbar.log("Hello world!");

app.use(express.json())

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notindex.html'))
    rollbar.error('path not valid')
    rollbar.critical('critical error!!!')
    rollbar.warning('warning!')
})


const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log(`server up on ${port}`)
})