import { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from "uuid"
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [filter,setFilter] = useState("all")
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
  ]);
  const addTodo = (text) => {
    setTodos((prev)=> [...prev,{id:uuidv4(),completed:false,text}])
  }
  const toggleTodo = (id) => {
    const cloned_todos = [...todos]
    const ItemIndex = cloned_todos.findIndex((todo) => todo.id === id)
    const item = todos[ItemIndex]
    item.completed = !item.completed;
    setTodos(cloned_todos)
  }
  const destroyTodo = (id) => {
    const cloned_todos = [...todos]
    const remainderTodos = cloned_todos.filter((todo) => todo.id !== id)
    setTodos(remainderTodos)
  }
  const clear = () => {
	  setTodos((prev)=>prev.filter((todo)=>todo.completed === false))
  }
  const mark = () => {
    const allComplete = todos.every((todo)=>todo.completed)
    const cloned_todos = todos.map((todo)=>({
      ...todo,completed:!allComplete
    }))
    setTodos(cloned_todos)
  }
  const filterState = {
    filter,
    setFilter
  }
  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filterState,
    clear,
    mark
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
    const context = useContext(TodoContext)
    if(context === undefined){
        throw new Error("useTodo must be call inside TodoProvider component!")
    }
    return context
}
