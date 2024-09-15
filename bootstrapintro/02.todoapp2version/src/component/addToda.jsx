function AddTodo() {
  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here" className="inputsize" />
        </div>
        <div class="col-4">
          <input type="date" className="inputsize" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
