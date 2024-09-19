import AddName from "./AddName";
import AddTodo from "./addToda";
import AddTodoBoth from "./addtodoboth";
import "../style/App.css";

function App() {
  let todoItems = [
    { name: "Buy milk", dueDate: "4/4/2024" },
    { name: "Go to college", dueDate: "4/6/2024" },
    { name: "Like right now", dueDate: "4/7/2024" },
  ];
  return (
    <center class="todo-container">
      <AddName />
      <AddTodo />
      <AddTodoBoth items={todoItems}></AddTodoBoth>
    </center>
  );
}
export default App;
