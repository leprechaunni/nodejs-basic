//operation system
const os = require('os');

//платформа (win32)
console.log(os.platform());

//архитектура (x64)
console.log(os.arch());

//информация о процессоре (массив объектов)
console.log(os.cpus());

//свободная память
console.log(os.freemem());

//сколько всего памяти
console.log(os.totalmem());

//корневая директория
console.log(os.homedir());

//сколько система находится в рабочем состоянии (сек)
console.log(os.uptime());
