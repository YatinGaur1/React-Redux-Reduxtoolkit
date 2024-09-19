function AddTodo({item}) {
  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-6">{item.name}</div>
        <div class="col-4">{item.dueDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;