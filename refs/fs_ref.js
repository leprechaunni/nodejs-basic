const fs = require('fs');
const path = require('path'); //модуль для работы с путями
//file system
//синхронные и асинхронные методы
//fs.writeFile fs.writeFileSync create file
//fs.mkdirSync создать папку синхронными методами, не рекомендуется (лучше асинхронные методы fs.mkdir)
//асинхронные методы не блокируют поток и при создании большого файла nodejs остановит свое выполнение, пока полностью не запишет данный файл
//создали папку
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//    if (err) throw err/*new Error(err)*/; //обрабатываем ошибку

//    console.log('The folder created');
// });

//создали файл путь, контент, к-й записываем в файл, коллбэк ф-я, в к-й параметром является ошибка
// fs.writeFile(
//    path.join(__dirname, 'notes', 'mynotes.txt'),
//    'Hello world',
//    (err) => {
//       if (err) throw err;
//       console.log('The file created');
//       //добавление нового контента в файл
//       fs.appendFile(
//          path.join(__dirname, 'notes', 'mynotes.txt'),
//          ' From append file',
//          (err) => {
//             if (err) throw err;
//             console.log('The file changed');

//             /***/
//          }
//       );
//    }
// );

// //считывание файла
// //путь до файла, к-й хотим считать, коллбэк ф-я
// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),
// 'utf-8',
// (err, data) => {
//    if (err) throw err; //обработали ошибку, если она есть
//    console.log(data);
//    //console.log(Buffer.from(data).toString());
// });
//чтобы оптимизировать чтение больших файлов, использует концепт буфферов
//м приводить буффер к строке Buffer.from(data).toString()
//не получаем контент из fs.appendFile т.к используем асинхронный метод и данный процесс выполняется позже
//м оставить console.log(data); и передать в readFile кодировку, в которой мы хотим считать инф-ю
//чтобы ф-и выполнялись последовательно, нужно перенести это в fs.appendFile (/***/)

//переименовывание файла (fs.writeFile и fs.readFile закомментировали)
fs.rename(
   path.join(__dirname, 'notes', 'mynotes.txt'),
   path.join(__dirname, 'notes', 'notes.txt'),
   (err) => {
      if (err) throw err;
      console.log('The file renamed');
   }
);
