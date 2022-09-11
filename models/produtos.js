const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    categoria: {type: String, required: true},
    nome: {type: String, required: true},
     preco: {type: Number, required: true},
     Sabor: {type: String, required: true}


})
module.exports = mongoose.model('Produtos', modelSchema)