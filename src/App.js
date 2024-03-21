import { Content } from "./Components/Content";
import { DeveloperFooter } from "./Components/DeveloperFooter";
import { Header } from "./Components/Header";
import { TodoProvider } from "./Contexts/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <section className="todoapp">
          <Header></Header>
          <Content></Content>
        </section>
        <DeveloperFooter></DeveloperFooter>
      </TodoProvider>
    </>
  );
}

export default App;
