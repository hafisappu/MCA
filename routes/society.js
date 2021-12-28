var express = require('express');
const farmerHelpers = require('../helpers/farmer-helpers');
var router = express.Router();
var farmerHelper=require('../helpers/farmer-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  farmerHelpers.getAllFarmers().then((farmers)=>{
    res.render('society/farmers', {society:true,farmers});
  })
  
});
router.get('/add-farmer',function(req,res){
  res.render('society/add-farmer')
})
router.post('/add-farmer',(req,res)=>{
  console.log(req.body);
  farmerHelpers.addFarmer(req.body,(result)=>{
    res.render('society/add-farmer')
  })
})

module.exports = router;
