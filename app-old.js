const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'content-type': 'application/json' });

        let salida = {
            nombre: 'Edisson',
            edad: 38,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola Mundo');
        res.end();
    })
    .listen(3000);



console.log('Escuchando en el puerto 3000');