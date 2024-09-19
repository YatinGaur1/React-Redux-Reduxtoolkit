import itemCss from "../styles/Item.module.css";
//itemCss is an object we can rename it
let Item = ({ FoodItem, BtnOnclick }) => {
  // let BtnEvt = (event) => {
  //   console.log(event);
  //   console.log(`${FoodItem} being bout`);
  // };
  return (
    <li className={`${itemCss["kg-item"]} list-group-item`}>
      {" "}
      <span>{FoodItem}</span>
      <button
        className={`${itemCss.button} btn btn-info`}
        onClick={(event) => {
          BtnOnclick(event);
        }}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
