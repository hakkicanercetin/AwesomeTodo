import NewTodoForm from "./NewTodoForm"

export const Header = () => {
  return (
    <header className="header">
		<h1>todos</h1>
		<NewTodoForm></NewTodoForm>
	</header>
  )
}
