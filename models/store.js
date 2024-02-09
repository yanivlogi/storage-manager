const mongoose = require('mongoose')


const storeSchema = mongoose.Schema({
    
    upc: String,
    name: String,
    category: String,
    subcategory: String, 
    amount: Number ,
    date: Date
    
})

module.exports = mongoose.model('Store', storeSchema)