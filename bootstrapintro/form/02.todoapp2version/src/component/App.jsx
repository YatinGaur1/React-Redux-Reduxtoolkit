import AddName from "./AddName";
import AddTodo from "./addToda";
import AddTodoBoth from "./addtodoboth";
import "../style/App.css";
import { useState } from "react";
import WelcomeMessage from "./welcomeMessage";

function App() {

  let [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemname, itemduedate) => {
    let newitem = { name: itemname, dueDate: itemduedate };
    let result = [...todoItem, newitem];
    setTodoItem(result);
  };
   const handleDelete=(deleteItemName)=>{
    let newresult=todoItem.filter(item=>item.name!=deleteItemName)
    setTodoItem(newresult);
   }
  return (
    <center class="todo-container">
      <AddName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItem.length===0 && <WelcomeMessage></WelcomeMessage>}
      <AddTodoBoth items={todoItem} deleteItem={handleDelete}></AddTodoBoth>
    </center>
  );
}
export default App;
