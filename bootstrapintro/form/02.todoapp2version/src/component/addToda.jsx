import { useState } from "react";
import { MdNoteAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  const handleOnChangeitem = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnChangedate = (event) => {
    setDueDate(event.target.value);
  };
  const handleonclick = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
   
  };

  return (
    <form class="container kg-row" onSubmit={handleonclick}>
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
            // type="button"
            class="btn btn-success kg-button"
            // onClick={handleonclick}
          >
            <MdNoteAdd />
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddTodo;
