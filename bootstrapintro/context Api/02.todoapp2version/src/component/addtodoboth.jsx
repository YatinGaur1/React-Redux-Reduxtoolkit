import { useContext } from "react";

import AddTodo from "./item";
import { TodoItemsContext } from "./store/todo-items-store";

let AddTodoBoth = () => {
    const {todoItem,deleteItem}=useContext(TodoItemsContext);

  return todoItem.map((item) => (
    <AddTodo key={item} item={item} onDelete={deleteItem}></AddTodo>
  ));
};
export default AddTodoBoth;
