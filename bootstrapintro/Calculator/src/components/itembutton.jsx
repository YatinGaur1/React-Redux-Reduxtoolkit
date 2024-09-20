import  styles from"../styles/ItemButton.module.css"
function ItemButton({keypad,onbtnclk}){
    return(
        <button className={styles.button} onClick={()=>onbtnclk(keypad)}>{keypad}</button>
    );
}
export default ItemButton;