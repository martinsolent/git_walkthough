const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res) {
res.writeHead(200,{'content-type': 'text/html'})
fs.readFile('index.html', function(error, data) {
 if (error) {
    res.writeHead(404)
    req.write('Error: File not found')
 } else { 
    res.write(data)
 }
res.end()
  })
})
server.listen(port, function(error) {
if (error) {
console.log('Something Went Wrong', error)
} else {
    console.log('Server is listerning on port' + port)
}
})