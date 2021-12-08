const eventEmitter = require('events');
//можем наследовать функционал от данного класса, который позволяет эмитить(?) или прослушивать определенные события в асинхронном режиме

//можем создать класс и наследоваться (extends) от этого метода
class Logger extends eventEmitter {
   log(message) {
      //название события, данные
      this.emit('message', `${message} ${Date.now()}`);
   }
}

const logger = new Logger();
//появились методы logger.emit() и .on()
//прослушка события раньше, чем мы эмитим событие, иначе не сможем их принять
logger.on('message', (data) => {
   console.log(data);
});

logger.log('Hello');
