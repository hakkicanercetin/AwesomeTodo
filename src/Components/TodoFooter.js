import { useTodo } from "../Contexts/TodoContext"

export const TodoFooter = () => {
	const {todos,filterState:{filter,setFilter},clear} = useTodo()
	
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length}</strong>
			item{todos.length > 1 && "s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={filter === "all" ? "selected" : ""} onClick={()=>setFilter("all")}>All</a>
			</li>
			<li>
				<a href="#/" className={filter === "active" ? "selected" : ""} onClick={()=>setFilter("active")}>Active</a>
			</li>
			<li>
				<a href="#/" className={filter === "completed" ? "selected" : ""} onClick={()=>setFilter("completed")}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={()=>clear()}>
			Clear completed
		</button>
	</footer>
  )
}
