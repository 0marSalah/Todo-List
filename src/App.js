import './App.css';
import Form from './components/form';
import ToDolist from './components/toDoList';

import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filter, setFilter] = useState([])

  useEffect(() => {
    getFromLocal()
  }, [])

  useEffect(() =>{
    filterHandler();
    savetoLocal();
}, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilter(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilter(todos)
        break;
    }

  }
  const savetoLocal = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
      console.log(todoLocal)
    }
    
  }


  return (
    <div className="App">
      <header>
        <h1>Omar`s Todo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
        />
      <ToDolist filter={filter} todos={todos} setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
