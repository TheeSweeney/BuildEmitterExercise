var Emitter = require('./emitter')

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('Off in the distance, someone said Hello.')
})

emtr.on('greet', function(){
  console.log("There was a greeting.")
})

console.log("Hello")
emtr.emit('greet')