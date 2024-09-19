import  styles from"../styles/App.module.css";
import Display from "./display.jsx";
import KeyBoard from "./keyboard.jsx";
function App() {
  
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <KeyBoard></KeyBoard>
    </div>
  );
}
export default App;
