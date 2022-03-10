var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
module.exports={

    addBmc:(bmc,callback)=>{

        db.get().collection('bmc').insertOne(bmc).then((data)=>{

            callback(data.ops[0]._id)
        })
    },
    getAllBmcs:()=>{
        return new Promise(async(resolve, reject)=>{
            let bmcs=await db.get().collection(collection.BMC_COLLECTION).find().toArray()
            resolve(bmcs)
        })
    },
    getBmcDetails:(farId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BMC_COLLECTION).findOne({_id:ObjectId(farId)}).then((bmc)=>{
                resolve(bmc)
            })
        })
    }
}

