import { useTodo } from "../../../Contexts/TodoContext"

const MarkAll = () => {
  const {mark} = useTodo()
  return (
    <label htmlFor="toggle-all" onClick={()=>mark()}>Mark all as complete</label>
  )
}

export default MarkAll