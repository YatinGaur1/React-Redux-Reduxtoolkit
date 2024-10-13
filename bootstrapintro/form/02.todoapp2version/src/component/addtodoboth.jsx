import AddTodo from "./item";

let AddTodoBoth=({items,deleteItem})=>{
 return(
    items.map(item=>(
        <AddTodo  key={item}  item={item} onDelete={deleteItem}></AddTodo>
    ))
 );
}
export default AddTodoBoth;