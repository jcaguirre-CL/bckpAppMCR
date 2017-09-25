var mongoose = require('mongoose');
var RegistroSchema = new mongoose.Schema({
  descripcion: String,
  informado: Boolean,
  responsable: String,
  operador: String,
  programa: String,
  areafalla: Number,
  tipofalla: Number,
  senal: Number,
  servicio: Number,
  duracionfalla: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  commited_at: { type: Date },
  fechaevento: { type: Date },
});
module.exports = mongoose.model('Registro', RegistroSchema);
