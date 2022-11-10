import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ToDoForm from './component/ToDoForm'
import ToDoList from './component/ToDoList'

function App() {


const [toDoList, setToDoList] = useState([])
const [toDoSelected, setToDoSelected] = useState(null)


useEffect(() =>{
  axios.get("http://todos-crud.academlo.tech/todos/")
  .then(res => setToDoList(res.data))
  .catch(error => console.log(error.response?.data))
}, [])

const getToDoData = () => { //Lo saco al limbo para que se pueda refrescar la pagina
  axios.get("http://todos-crud.academlo.tech/todos/") 
  .then(res => setToDoList(res.data))
  .catch(error => console.log(error.response?.data))
}

const addToDo = (newToDo) =>{
  // setToDoList([ ...toDoList, newToDo ])//Agarra lo que tenga toDoList y añadelo a data
  axios.post("http://todos-crud.academlo.tech/todos/", newToDo) //Link / body
  .then(() => getToDoData())
  .catch(error => console.log(error.response?.data));
}
//Se lo pasamos por props
const deleteToDo = (id) => {
  axios.delete(`http://todos-crud.academlo.tech/todos/${id}/`)
  .then(() => getToDoData());
}

const selectToDo = (completeToDo) =>{
  setToDoSelected(completeToDo)
}

const updateToDo = (editedData) =>{
  axios.put(`http://todos-crud.academlo.tech/todos/${toDoSelected.id}/`, editedData) //Link / body
  .then(() => getToDoData())
  .catch(error => console.log(error.response?.data))
}

  return (
    <div className="App">
      <div className='form'>
        <ToDoForm addToDo={addToDo} toDoSelected={toDoSelected} updateToDo = {updateToDo}/>
      </div>
      <div className='list'>
        <ToDoList toDoList={toDoList} deleteToDo={deleteToDo} selectToDo={selectToDo} toDoSelected={toDoSelected}/>
      </div>
    </div>
  )
}

export default App
