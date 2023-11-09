var express = require('express');
const MobileModel = require('../models/MobileModel');
const CategoryModel = require('../models/Category');
var router = express.Router();

router.get('/', async (req, res) => {
  var toys = await MobileModel.find({});
  var total = await MobileModel.count();
  res.render('main', { toys : toys , total : total,layout:'layout' })
  
})
router.get('/index', async (req, res) => {
  var toys = await MobileModel.find({});
  var total = await MobileModel.count();
  res.render('index', { toys : toys , total : total,layout:'newlayout'})
})
router.get('/index', async (req, res) => {
  var toy = await MobileModel.find({});
  res.render('list', { toy: toy });
})

router.get('/delete/:id', async(req, res) => {
  await MobileModel.findByIdAndDelete(req.params.id)
  .then(() => { console.log ('Delete toy succeed !')})
  .catch((err) => { console.log ('Delete toy failed !')});

  res.redirect('/index');
})

router.get('/drop', async(req, res) => {
  await MobileModel.deleteMany({})
  .then(() => { console.log ('Delete all toy succeed !')});
  
  res.redirect('/index');
})

router.post('/order', async (req, res) => {
  var id = req.body.id;
  var mobile = await MobileModel.findById(id);
  var order_quantity = req.body.order_quantity;
  var price = req.body.price;
  var total_price = price * order_quantity;
  res.render('order_confirm', { mobile: mobile, order_quantity : order_quantity, total_price : total_price});
})

router.get('/add', async(req, res) => {
  var category = await CategoryModel.find({});
  res.render('add', {category: category,layout:'newlayout'});
})

router.post('/add', async (req, res) => {
  var mobile = req.body;
  await MobileModel.create(mobile)
  .then(() => { console.log ('Add new toy succeed !')});
  res.redirect('/index');
})

router.get('/edit/:id', async (req, res) => {
  var toys  = await MobileModel.findById(req.params.id);
  res.render('edit', { toys : toys,layout:'newlayout'});
})

router.post('/edit/:id', async (req, res) => {
  console.log("ok")
  var id = req.params.id;
  console.log(id)
  await MobileModel.findByIdAndUpdate(id,req.body)
  .then(() => { console.log('Edit toy succeed !') });
  res.redirect('/index');
})

router.get('/list',  async(req, res) => {
  var toys  = await MobileModel.find({});
  res.render('list', { toys : toys,layout:'newlayout'});
})

module.exports = router;