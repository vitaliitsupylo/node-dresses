const http = require('http');

const {publicWay, home, notFound} = require('./routes');


const proxy = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url.match(/\.(html|css|js|png)$/)) {
        /*отдача файлов*/
        publicWay(req, res);
    } else if (req.url === '/') {
        /*отдача главной страницы*/
        home(req, res);
    } else {
        notFound(req, res);
    }

});
proxy.listen(3000, () => {
    console.log('Сервер работает');
});