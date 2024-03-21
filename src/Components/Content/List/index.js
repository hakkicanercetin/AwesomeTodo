import React from "react";
import { useTodo } from "../../../Contexts/TodoContext";
import { Item } from "./Item";
let filtered =null
export const List = () => {
  const { todos,filterState:{filter} } = useTodo();
  filtered = todos
  if(filter !== "all"){
    filtered= todos.filter((todo)=>(filter === "active" ? todo.completed === false : todo.completed === true
    ))
  }
  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo}></Item>
      ))}
    </ul>
  );
};
