import { Field, Form, Formik } from "formik";
import validation from "./validations";
import { useTodo } from "../../../Contexts/TodoContext";

function NewTodoForm(){
  const {addTodo} = useTodo()
  return (
    <Formik
      initialValues={{
        text:""
      }}
      onSubmit={(values,bag) => {
        addTodo(values.text)
        bag.resetForm()
      }}
      validationSchema={validation}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
};
export default NewTodoForm