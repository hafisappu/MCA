var db=require('../config/connection')
var collection=require('../config/collections');
const async = require('hbs/lib/async');
module.exports={

    addBmilk:(bmilk)=>{
        console.log(bmilk);

        db.get().collection('bmilk').insertOne(bmilk).then((data)=>{
            Callback(data.ops[0]._id)
        })
    },
    getAllBmilks:()=>{
        return new Promise(async(resolve, reject)=>{
            let bmilks=await db.get().collection(collection.BMILK_COLLECTION).find().toArray()
            resolve(bmilks)
        })
    }
}