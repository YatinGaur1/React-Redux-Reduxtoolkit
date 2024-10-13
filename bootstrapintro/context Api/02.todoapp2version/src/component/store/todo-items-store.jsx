//1
import { createContext } from "react";

export const TodoItemsContext=createContext({
    todoItem:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
});