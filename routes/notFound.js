const fs = require('fs');
const path = require('path');

function notFound(req, res) {
    /*устанавливает Content Type по умолчанию */
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    /*считываем файл с диска с помощью потока*/
    const stream = fs.createReadStream(path.resolve('public', 'error.html'));

    /*соединяем поток записи с потоком чтения*/
    stream.pipe(res);

}

module.exports = notFound;