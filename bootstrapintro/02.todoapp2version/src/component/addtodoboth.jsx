import AddTodo from "./item";

let AddTodoBoth=({items})=>{
 return(
    items.map(item=>(
        <AddTodo item={item}></AddTodo>
    ))
 );
}
export default AddTodoBoth;