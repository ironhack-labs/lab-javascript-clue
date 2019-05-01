const http = require("http");
const st = require("st");


const serverConfig = {
    path: __dirname + '/public',
    index: 'index.html',
    cache: false
};

http.createServer(st(serverConfig)).listen(3000, () => {
    console.log("inciado en 3000");
});