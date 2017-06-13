var Emitter = require('./emitter')
var eventConfig = require('./config').events

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
  console.log('Off in the distance, someone said Hello.')
})

emtr.on(eventConfig.GREET, function(){
  console.log("There was a greeting.")
})

console.log("Hello")
emtr.emit(eventConfig.GREET)//