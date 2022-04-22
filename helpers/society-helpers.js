var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb')
const async = require('hbs/lib/async')
const { reject } = require('bcrypt/promises')
const req = require('express/lib/request')
module.exports={

    // doSignup:(societyData)=>{
    //     return new Promise(async(resolve,reject)=>{
    //         societyData.Password=await bcrypt.hash(societyData.Password,10)
    //         db.get().collection(collection.SOCIETY_COLLECTION).insertOne(societyData).then((data)=>{
    //             resolve(data.ops[0])
    //         })
    //     })
    // },
    doLogin: (userData)=>{
        return new Promise(async (resolve, reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.SOCIETY_COLLECTION).findOne({id:userData.id})
            if(user){
                if(userData.password === user.password){
                    console. log("login success");
                }else{
                    console. log('login failed');
                }
            }else{
                console.log("not");
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

