var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
module.exports={

    addFarmer:(farmer,callback)=>{

        db.get().collection('farmer').insertOne(farmer).then((data)=>{

            callback(data.ops[0]._id)
        })
    },
    getAllFarmers:()=>{
        return new Promise(async(resolve, reject)=>{
            let farmers=await db.get().collection(collection.FARMER_COLLECTION).find().toArray()
            resolve(farmers)
        })
    },
    getFarmerDetails:(farId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FARMER_COLLECTION).findOne({_id:ObjectId(farId)}).then((farmer)=>{
                resolve(farmer)
            })
        })
    }
}

