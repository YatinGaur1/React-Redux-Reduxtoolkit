import FoodItemCss from "../styles/FoodInput.module.css";
const FoodInput = ({handleOnchange}) => {
  return (
    <input
      className={FoodItemCss.foodinput}
      type="text"
      placeholder="Enter food item here"
      onChange={handleOnchange}
    />
  );
};
export default FoodInput;
