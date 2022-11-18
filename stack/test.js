const stack = require('./stack-obj')

const s = new stack()
s.push(2)
s.push(4)
s.push(6)
console.log(s.peek())
console.log(s.size())
//tentando acessar items protegidos
console.log(s.items)