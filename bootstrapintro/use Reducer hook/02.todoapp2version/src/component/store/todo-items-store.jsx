import { createContext } from "react";
import { useReducer } from "react";

 export const TodoItemsContext = createContext({
  todoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


//this is a pure function.
const todoItemsReducer = (currtodoitem, action) => {
  let newtodoitem = currtodoitem;

  if (action.type === "NEW_ITEM") {
    let newitem = {
      name: action.payload.itemname,
      dueDate: action.payload.itemduedate,
    };
    newtodoitem = [...currtodoitem, newitem];
  } else if (action.type === "DELETE_ITEM") {
    newtodoitem = currtodoitem.filter(
      (item) => item.name != action.payload.itemname
    );
  }
  return newtodoitem;
};

const TodoContextProvider = ({ children }) => {
  let [todoItem, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemname, itemduedate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemname,
        itemduedate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (deleteItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemname: deleteItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItem, 
        addNewItem, 
        deleteItem, 
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoContextProvider;
