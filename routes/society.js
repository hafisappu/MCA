var express = require('express');
const farmerHelpers = require('../helpers/farmer-helpers');
var router = express.Router();
var farmerHelper=require('../helpers/farmer-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  let farmers=[
    {
      name:"Farmer 2",
      id:"002",
      address:"add2"
    },
    {
      name:"Farmer 3",
      id:"003",
      address:"add3"
    },
    {
      name:"Farmer 4",
      id:"004",
      address:"add4"
    },
    {
      name:"Farmer 5",
      id:"005",
      address:"add5"
    },
    {
      name:"Farmer 6",
      id:"006",
      address:"add6"
    },
    {
      name:"Farmer 7",
      id:"007",
      address:"add7"
    },
    {
      name:"Farmer 8",
      id:"008",
      address:"add9"
    } 
  ]
  res.render('society/farmers', {society:true,farmers});
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
