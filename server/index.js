const express = require('express')
const app = express()
const port = 3001
const router = require('../server/routes/index')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

app.listen(port, () => {
    console.log(`this server run on port ${port}`);
})

module.exports = app