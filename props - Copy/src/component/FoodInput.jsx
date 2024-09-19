import FoodItemCss from "../styles/FoodInput.module.css";
const FoodInput = ({handleOnKeyDown}) => {
  return (
    <input
      className={FoodItemCss.foodinput}
      type="text"
      placeholder="Enter food item here"
      onKeyDown={handleOnKeyDown}
    />
  );
};
export default FoodInput;
