import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {

 const [todos , setTodos  ] = useState([]);

 /*fetch("http://localhost:3000/todo")
 .then (async function (res){
  const json = await res.json();
  setTodos(json.todos);
 })*/
 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/todo");
    const json = await response.json();
    setTodos(json.todo);
  };

  fetchData();
}, []);

 return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
)
}

export default App