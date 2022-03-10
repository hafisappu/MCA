var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
module.exports={

    addSociety:(society,callback)=>{

        db.get().collection('society').insertOne(society).then((data)=>{

            callback(data.ops[0]._id)
        })
    },
    getAllSocieties:()=>{
        return new Promise(async(resolve, reject)=>{
            let societies=await db.get().collection(collection.SOCIETY_COLLECTION).find().toArray()
            resolve(societies)
        })
    },
    getSocietyDetails:(farId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SOCIETY_COLLECTION).findOne({_id:ObjectId(farId)}).then((society)=>{
                resolve(society)
            })
        })
    }
}

