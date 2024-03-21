import { TodoFooter } from "../TodoFooter";
import { List } from "./List";
import MarkAll from "./MarkAll";

export const Content = () => {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <MarkAll></MarkAll>
        <List></List>
      </section>
      <TodoFooter></TodoFooter>
    </>
  );
};
