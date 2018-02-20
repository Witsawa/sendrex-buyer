const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = express.Router()

app.use(express.static(`${__dirname}/www`)) // set the static files location for the static html

app.set('views', `${__dirname}/www`)

router.get('/*', (req, res, next) => { res.sendFile(`${__dirname}/www/index.html`) })

app.use('/', router)

app.listen(port)
console.log('App running on port', port)