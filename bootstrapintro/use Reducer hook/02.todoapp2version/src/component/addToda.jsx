import { useContext, useState } from "react";
import { MdNoteAdd } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-items-store";

function AddTodo() {
  const {addNewItem}=useContext(TodoItemsContext);

  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  const handleOnChangeitem = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnChangedate = (event) => {
    setDueDate(event.target.value);
  };
  const handleonclick = () => {
    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            className="inputsize"
            value={todoName}
            onChange={handleOnChangeitem}
          />
        </div>
        <div class="col-4">
          <input
            type="date"
            className="inputsize"
            value={dueDate}
            onChange={handleOnChangedate}
          />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={handleonclick}
          >
            <MdNoteAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
