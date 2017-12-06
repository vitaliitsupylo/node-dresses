const fs = require('fs');
const path = require('path');

function home(req, res) {

    /*устанавливает Content Type по умолчанию */
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    /*считываем файл с диска с помощью потока*/
    const stream = fs.createReadStream(path.resolve('public', 'index.html'));

    /*соединяем поток записи с потоком чтения*/
    stream.pipe(res);

}


module.exports = home;