/** @format */

require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3030
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const server = app.listen(PORT, () => {
	console.log(`Aplication is up and listen in port: ${server.address().port}`)
})
server.on('error', (error) => console.log(`Aplication has encountered an error: ${error}`))
