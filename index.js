const http = require('http');
//помогает создать и настроить работу серверов

//передаем функцию, к-я будет выполнена при происхождении на сервере определенных запросов (handler)
//принимает в себя request (запрос на сервер), response (ответ сервера)
const server = http.createServer((req, res) => {
   console.log(req.url);

   res.write('<h1>Hello bby</h1>')
   res.write('<h2>Hello bby</h2>')
   res.write('<h3>Hello bby</h3>')
   //res.end() //необходимо закрыть 
   res.end(`
      <div style="background: red; width: 200px; height: 200px;">
         <h1>Test</h1>
      </div>
   `)
});

//запускаем данный сервер
//порт, на к-м хотим запустить
//коллбэк ф-я, к-я будет выполнена, когда сервер запущен
server.listen(3000, () => {
   console.log('Server is running...');
});
