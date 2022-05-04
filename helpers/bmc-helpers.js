var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
module.exports={

    doLogin: (userData)=>{
        return new Promise(async (resolve, reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.BMC_COLLECTION).findOne({id:userData.id})
            if(user){
                if(userData.password === user.password){
                    console.log("login success");
                    response.user=user
                    response.status=true
                    resolve(response)
                }else{
                    console.log('login failed');
                    resolve({status:false})
                }
            }else{
                console.log("invalid user");
                resolve({status:false})
            }
        })
    },

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

