var db=require('../config/connection')
module.exports={

    addFarmer:(farmer,callback)=>{
        console.log(farmer);
        db.get().collection('farmer').insertOne(farmer).then((data)=>{
            console.log(data);
            callback(data)
        })
    }
}