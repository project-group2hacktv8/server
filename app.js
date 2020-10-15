const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


io.on('connection', (socket) => {
    console.log('a user connected');
})


http.listen(PORT, () => {
    console.log('run :'+PORT)
})


