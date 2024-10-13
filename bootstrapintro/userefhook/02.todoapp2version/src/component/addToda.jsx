import { useState,useRef } from "react";
import { MdNoteAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement=useRef();
  const todoDueDate=useRef();
//to inside direct cd used
  const handleonclick = () => {
    const todoName=todoNameElement.current.value;
    const dueDate=todoDueDate.current.value;

    onNewItem(todoName, dueDate);
    todoNameElement.current.value='';
    todoDueDate.current.value='';

  };

  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            className="inputsize"
            ref={todoNameElement}
          />
        </div>
        <div class="col-4">
          <input
            type="date"
            className="inputsize"
            ref={todoDueDate}
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
