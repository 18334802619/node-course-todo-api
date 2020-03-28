const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
    return console.log('unable to connect mongodb server');
}
console.log('Connected to Mongodb server');

//deleteMany
/*db.collection('Todos').deleteMany({text:'walk the dog'}).then((result)=>{
console.log(result);
});*/

//deleteOne
/*db.collection('Todos').deleteOne({text:'something to do'}).then((result)=>{
    console.log(result);
});*/

//findoneanddelete
/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
console.log(result); 
});*/

db.collection('Users').findOneAndDelete({_id:new ObjectID('5e7ecdafe759ef18a05f80bd')}).then((result)=>{
console.log(result);
});

//db.close();
});