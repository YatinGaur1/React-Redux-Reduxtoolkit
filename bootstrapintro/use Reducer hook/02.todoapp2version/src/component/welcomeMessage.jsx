import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

import styles from "../style/WelcomeMessag.module.css";

let WelcomeMessage = () => {
  const contextobj = useContext(TodoItemsContext); //use context return value of context;
  const todoitem=contextobj.todoItem;

  return (
    todoitem.length === 0 && (
      <div className={styles.message}>Enjoy your day</div>
    )
  );
};
export default WelcomeMessage;
