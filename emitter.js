function Emitter() {//function constructor so we can create multple emitters
  this.events = {}
};

Emitter.prototype.on = function(type, listener){
  this.events[type] = this.events[type] || [];//I want a property and I want it to be an array
  this.events[type].push(listener)//push new listener into the array for that "event" type
}

Emitter.prototype.emit = function(type){
  if(this.events[type]){//if event type exists
    this.events[type].forEach(function(listener){//loop through array
      listener();//execute functions
    })
  }
}

module.exports = Emitter;