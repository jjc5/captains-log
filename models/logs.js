const {Schema, model} = require('mongoose');

const logsSchema = new Schema({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  shipIsBroken: {type: Boolean, required: true},
})

const Logs = model('Logs', logsSchema);

module.exports = Logs;
