import ItemButton from "./itembutton";
import styles from "../styles/KeyBoard.module.css";

function KeyBoard() {
  let keyboard = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/", 
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {keyboard.map((item) => (
        <ItemButton key={item} keypad={item}></ItemButton>
      ))}
    </div>
  );
}
export default KeyBoard;
