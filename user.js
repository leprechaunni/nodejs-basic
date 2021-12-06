const user = {
   name: 'Roman',
   age: 34,
};

module.exports = {
   user: user,
   sayHello() {
      console.log(`Hello, ${user.name}!`);
   },
};
