import AddName from "./AddName";
import AddTodo from "./addToda";
import AddTodoBoth from "./addtodoboth";
import "../style/App.css";
import WelcomeMessage from "./welcomeMessage";
import TodoContextProvider from "./store/todo-items-store";



function App() {
  return (
    <TodoContextProvider>
      <center class="todo-container">
        <AddName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <AddTodoBoth></AddTodoBoth>
      </center>
    </TodoContextProvider>
  );
}
export default App;
