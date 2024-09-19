import  styles from"../styles/ItemButton.module.css"
function ItemButton({keypad}){
    return(
        <button className={styles.button}>{keypad}</button>
    );
}
export default ItemButton;