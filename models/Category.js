var mongoose = require('mongoose')
var CategorySchema = mongoose.Schema(
   {
      name: String,
   }
)
var CategoryModel = mongoose.model("Category", CategorySchema, "Category");
module.exports = CategoryModel;