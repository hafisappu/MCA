var express = require('express');
const async = require('hbs/lib/async');
const farmerHelpers = require('../helpers/farmer-helpers');
var router = express.Router();
var farmerHelper=require('../helpers/farmer-helpers');
const smilkHelpers = require('../helpers/smilk-helpers');
var smilkHelper=require('../helpers/smilk-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  farmerHelpers.getAllFarmers().then((farmers)=>{
    res.render('society/farmers', {society:true,farmers});
  }) 
});

router.get('/milk', function(req, res, next) {
  smilkHelpers.getAllSmilks().then((smilks)=>{
    res.render('society/view-milk', {society:true,smilks});
  })
});

router.get('/feedback', function(req, res) {
  res.render('society/feedback', {society:true});
})

router.get('/add-farmer',function(req,res){
  res.render('society/add-farmer',{society:true})
})

router.get('/add-milk/:id',async (req,res)=>{
  let farmer=await farmerHelpers.getFarmerDetails(req.params.id)
  console.log(farmer);
  res.render('society/add-milk',{society:true,farmer})
})
router.post('/add-farmer',(req,res)=>{
  console.log(req.body);
  farmerHelpers.addFarmer(req.body,(result)=>{
    res.render('society/add-farmer',{society:true})
  })
})
router.post('/add-milk',(req,res)=>{
  console.log(req.body);
  smilkHelpers.addSmilk(req.body,(result)=>{
    res.render("society/add-milk",{society:true})
  })
})

module.exports = router;
