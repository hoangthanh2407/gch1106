var mongoose = require('mongoose')
var MobileSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      quantity: Number, 
      image: String,
      price: Number,
      date:Date,
    
   }
)
var MobileModel = mongoose.model("TOY", MobileSchema, "toys");
module.exports = MobileModel;