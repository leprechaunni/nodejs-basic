//взаимодействие с консолью node js
//функция, позволяющая удобно получать параметры из консли
//console.log(process.argv)

function consoleToJSON() {
   //игнорируем первые два параметра
   //это путь до файла node.exe и console.js
   const c = {};

   for (let i = 2; i < process.argv.length; i++) {
      const arg = process.argv[i].split('=');
      //ключ = значение
      c[arg[0]] = arg[1] ? arg[1] : true;
   }

   return c;
}

console.log(consoleToJSON())
