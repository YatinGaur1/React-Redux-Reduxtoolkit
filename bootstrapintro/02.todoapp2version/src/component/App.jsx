import AddName from "./AddName";
import AddTodo from './addToda';
import AddTodo2 from "./addToda2";
import AddTodo3 from "./addTodo3";
import "../style/App.css"

function App() {
  return (
    <center class="todo-container">
     <AddName/>
     <AddTodo/>
     <AddTodo2/>
     <AddTodo3/>
    </center>
  );
}
export default App;
