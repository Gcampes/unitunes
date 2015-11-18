'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var MidiaSchema = new Schema({
  nome: String,
  tipo: String,
  categoria: String,
  autores: [{type: Schema.Types.ObjectId, ref: 'User'}],
  descricao: String,
  imagem: String,
  arquivo: String,
  preco: Number,
  ativo: Boolean
});

module.exports = mongoose.model('Midia', MidiaSchema);
