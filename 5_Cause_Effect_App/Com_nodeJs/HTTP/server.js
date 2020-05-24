const http = require('http')
const fs = require('fs')
const path = require('path')

var express = require('express')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filepath = path.join(__dirname,'public',file)
    const extname = path.extname(filepath)

    const allowedFileTypes = ['.html','.css','.js'];
    const allowed = allowedFileTypes.find(item => item == extname) 

    if(!allowed) return
    fs.readFile(
        filepath,
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )

}).listen(5000, () => console.log('Server is running'))