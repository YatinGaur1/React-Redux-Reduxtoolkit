import AddName from "./AddName";
import AddTodo from "./addToda";
import AddTodoBoth from "./addtodoboth";
import "../style/App.css";
import { useState } from "react";
import WelcomeMessage from "./welcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemname, itemduedate) => {
    let newitem = { name: itemname, dueDate: itemduedate };
    let result = [...todoItem, newitem];
    setTodoItem(result);
  };
  const deleteItem = (deleteItemName) => {
    let newresult = todoItem.filter((item) => item.name != deleteItemName);
    setTodoItem(newresult);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItem,   // todoItem: todoItem, u cn use it like this also bcyse key and value is same
        addNewItem, // addNewItem: addNewItem,
        deleteItem, // deleteItem: deleteItem,
      }}
    >
      <center class="todo-container">
        <AddName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <AddTodoBoth></AddTodoBoth>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
