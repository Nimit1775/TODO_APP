const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nimitsodhani1:nimit@todo.fqpodin.mongodb.net/")
const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean

})

const Todo = mongoose.model('Todos', TodoSchema)
module.exports = {
    Todo
}