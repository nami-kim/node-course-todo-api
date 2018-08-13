const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then(res => {
//   console.log(res)
// })

// Todo.findOneAndRemove({ _id: '5b7118301c2468e984027163' }).then(res => {
//   console.log(res)
// })

Todo.findByIdAndRemove('5b71b8f8e9aabc866cb3b7aa').then((todo) => {
  console.log(todo)
}, (e) => {
  console.log('Unable to find and remove the todo', e)
})
