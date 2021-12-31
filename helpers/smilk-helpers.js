var db=require('../config/connection')
var collection=require('../config/collections');
const async = require('hbs/lib/async');
module.exports={

    addSmilk:(smilk)=>{
        console.log(smilk);

        db.get().collection('smilk').insertOne(smilk).then((data)=>{
            Callback(data.ops[0]._id)
        })
    },
    getAllSmilks:()=>{
        return new Promise(async(resolve, reject)=>{
            let smilks=await db.get().collection(collection.SMILK_COLLECTION).find().toArray()
            resolve(smilks)
        })
    }
}