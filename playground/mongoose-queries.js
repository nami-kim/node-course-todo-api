const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

var id = '5b70938ae6b300ed984ecf10'

if (!ObjectID.isValid(id)) {
  console.log('Id not valid')
}

User.findById(id).then(
  user => {
    if (!user) {
      console.log('User not found')
    }
    console.log('User by Id', user)
  },
  e => console.log(e)
)


// var id = '5b70af493177dbbc43df612a'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by Id', todo)
// }).catch((e) => console.log(e))

