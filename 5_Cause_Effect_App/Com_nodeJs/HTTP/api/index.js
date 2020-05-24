const http = require('http')
const data = require('./data.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

function writefile(cb) {
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2),
        err => {
            if (err) throw err

            cb(JSON.stringify({ message: "OK" }));
        }
    )
}

http.createServer((req, res) => {
    const { name, age, city, del } = URL.parse(req.url, true).query

    res.writeHead(200,{
        'Access-Control-Allow-Origin': '*'
    })

    if (!name || !age || !city) {
        return res.end(JSON.stringify(data))
    }

    if (del) {
        data.people = data.people.filter(item => String(item.name) !== String(name))
        return writefile((message) => res.end(message))
    }

    data.people.push({name, age, city})

    return writefile((message) => res.end(message))
}).listen(3000, () => console.log('API is running'))