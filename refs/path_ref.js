const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, 'test', 'second.html'));
// документация на сайте nodejs.org docs

//перейти в консоли в др папку с помощью команды cd folder_name, где cd-change directory
//вернуться назад cd ..