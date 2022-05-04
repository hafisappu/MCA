var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
const async = require('hbs/lib/async')
const { reject } = require('bcrypt/promises')
const req = require('express/lib/request')
module.exports={

    doLogin: (userData)=>{
        return new Promise(async (resolve, reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.SOCIETY_COLLECTION).findOne({id:userData.id})
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

