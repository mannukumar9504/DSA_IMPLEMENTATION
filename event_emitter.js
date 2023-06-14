const events = require('events');

let emitter = new events.EventEmitter();
wrapGameAction(emitter, "player_1_select",console.log);
emitter.emit("player_1_select", "{ \"row\": 1, \"column\": 1 }");

function wrapGameAction(emitter, actionName, callback) {
  emitter.addListener(actionName, callback);
}

module.exports.wrapGameAction = wrapGameAction;