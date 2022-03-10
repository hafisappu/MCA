var express = require('express');
const async = require('hbs/lib/async');
const bmcHelpers = require('../helpers/bmc-helpers');
var router = express.Router();
var bmcHelper=require('../helpers/bmc-helpers');
const dmilkHelpers = require('../helpers/dmilk-helpers');
var dmilkHelper=require('../helpers/dmilk-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  bmcHelpers.getAllBmcs().then((bmcs)=>{
    res.render('diary/bmcs', {diary:true,bmcs});
  }) 
});

router.get('/milk', function(req, res, next) {
  dmilkHelpers.getAllDmilks().then((dmilks)=>{
    res.render('diary/view-milk', {diary:true,dmilks});
  })
});

router.get('/feedback', function(req, res) {
  res.render('diary/feedback', {diary:true});
})

router.get('/add-bmc',function(req,res){
  res.render('diary/add-bmc',{diary:true})
})

router.get('/add-milk/:id',async (req,res)=>{
  let bmc=await bmcHelpers.getBmcDetails(req.params.id)
  console.log(bmc);
  res.render('diary/add-milk',{diary:true})
})
router.post('/add-bmc',(req,res)=>{
  console.log(req.body);
  bmcHelpers.addBmc(req.body,(result)=>{
    res.render('diary/add-bmc',{diary:true})
  })
})
router.post('/add-milk',(req,res)=>{
  console.log(req.body);
  dmilkHelpers.addDmilk(req.body,(result)=>{
    res.render("diary/add-milk",{diary:true})
  })
})

module.exports = router;
