import { useState } from "react";
import styles from "../styles/App.module.css";
import Display from "./display.jsx";
import KeyBoard from "./keyboard.jsx";
function App() {
  let [calVal, setCalVal] = useState("");
  let onbuttonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);//eval take a string then it solve math operation.return also string.
      setCalVal(result);
    } else {
      const newcalval = calVal + buttonText;
      setCalVal(newcalval);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <KeyBoard onBtnClk={onbuttonclick}></KeyBoard>
    </div>
  );
}
export default App;
