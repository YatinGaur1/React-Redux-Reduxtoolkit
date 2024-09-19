import Item from "./Item";
//props is an object we can change it name also it is only for remember mean througn attribute , object is coming and  in this project we use three way to fetch data from  object like props.
let FoodItem = (props) => {
  let { items } = props;
  return (
    <>
      <ul className=" list-group">
        {items.map((item) => (
          <Item key={item} FoodItem={item} BtnOnclick={()=>console.log(`${item} being bought`)}></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItem;
