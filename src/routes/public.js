// const fs = require('fs');
const path = require('path');

function public(req, res) {
    const extension = path.extname(req.url);
    let contentType = '';

    /*определяем content type*/
    switch (extension) {
        case '.html' :
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        default:
            contentType = 'text/plain';
    }

    /*устанавливает Content Type по умолчанию */
    res.statusCode('200');
    res.setHeader('Content-Type', contentType);

    /*считываем файл с диска с помощью потока*/
    const stream = fs.createReadStream(path.join(__dirname, req.url));

    /*соединяем поток записи с потоком чтения*/
    stream.pipe(res);

    /*обработка ошибок*/
    stream.on('error', (err) => {
        if (err.code === 'ENOENT') {
            res.writeHead('404', {'Content-Type': 'text/plain'});
            res.end('Not found');
        } else {
            res.writeHead('500', {'Content-Type': 'text/plain'});
            res.end(err.message);
        }
    });
}

module.exports = public;