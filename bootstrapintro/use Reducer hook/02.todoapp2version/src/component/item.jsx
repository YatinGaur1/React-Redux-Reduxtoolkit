import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-items-store";

function AddTodo({item}) {
  const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-6">{item.name}</div>
        <div class="col-4">{item.dueDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button" onClick={()=>deleteItem(item.name)}>
            <MdDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;