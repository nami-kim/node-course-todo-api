// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({ 
    _id: new ObjectID("5b6a0065a23e6b87274cdd13")
  }, {
    $set: {
      name: "Nami Lee"
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  })

 
  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID("5b69d09b1395e04741057581")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  // db.close();
});