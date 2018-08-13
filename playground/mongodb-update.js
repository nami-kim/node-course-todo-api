// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b6f9ab186e87b248913b07f')
  // }, {
  //     $set: {
  //       completed: false
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((res) => {
  //     if (err) {
  //       return console.log('Unable to update the item')
  //     }
  //     console.log('Updated the item', res)
  //   })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b6fa37fed1d182edd908e71')
  }, {
      $set: {
        name: 'Nami Kim'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((res) => {
      console.log(res)
    })
  // db.close();
})