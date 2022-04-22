var express = require('express');
const async = require('hbs/lib/async');
const societyHelpers = require('../helpers/society-helpers');
var router = express.Router();
var societyHelper=require('../helpers/society-helpers');
const bmilkHelpers = require('../helpers/bmilk-helpers');
var bmilkHelper=require('../helpers/bmilk-helpers');
const { response } = require('express');
/* GET home page. */
router.get('/', function(req, res, next) {
  societyHelpers.getAllSocieties().then((societies)=>{
    res.render('bmc/societies', {bmc:true,societies});
  }) 
});

router.get('/milk', function(req, res, next) {
  bmilkHelpers.getAllBmilks().then((bmilks)=>{
    res.render('bmc/view-milk', {bmc:true,bmilks});
  })
});

router.get('/feedback', function(req, res) {
  res.render('bmc/feedback', {bmc:true});
})

router.get('/add-society',function(req,res){
  res.render('bmc/add-society',{bmc:true})
})

router.get('/add-milk/:id',async (req,res)=>{
  let society=await societyHelpers.getSocietyDetails(req.params.id)
  console.log(society);
  res.render('bmc/add-milk',{bmc:true})
})
router.post('/add-society',(req,res)=>{
  console.log(req.body);
  societyHelpers.addSociety(req.body,(result)=>{
    res.render('bmc/add-society',{bmc:true})
  })
})
router.post('/add-milk',(req,res)=>{
  console.log(req.body);
  bmilkHelpers.addBmilk(req.body,(result)=>{
    res.render("bmc/add-milk",{bmc:true})
  })
})

module.exports = router;
