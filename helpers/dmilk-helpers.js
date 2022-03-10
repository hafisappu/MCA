var db=require('../config/connection')
var collection=require('../config/collections');
const async = require('hbs/lib/async');
module.exports={

    addDmilk:(dmilk)=>{
        console.log(dmilk);

        db.get().collection('dmilk').insertOne(dmilk).then((data)=>{
            Callback(data.ops[0]._id)
        })
    },
    getAllDmilks:()=>{
        return new Promise(async(resolve, reject)=>{
            let dmilks=await db.get().collection(collection.DMILK_COLLECTION).find().toArray()
            resolve(dmilks)
        })
    }
}