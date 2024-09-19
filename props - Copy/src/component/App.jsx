import HeadName from "./Heading.jsx";
import ErrorMsg from "./ErrorMessage.jsx";
import FoodItem from "./Fooditem.jsx";
import Container from "./Container.jsx";
import FoodInput from "./FoodInput.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [fooditems,setFoodItems]=useState([]);

  const OnKeyDown = (event) => {
    if(event.key==="Enter"&&event.target.value!=""){
      let newFoodItem=event.target.value;
      console.log(event);
      event.target.value='';
      let newfooditems=[...fooditems,newFoodItem];//...fooditems gives all element of fooditemsarray
      setFoodItems(newfooditems);
    }
 
  };
  return (
    <>
      <Container>
        <HeadName></HeadName>
        <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
        <ErrorMsg items={fooditems}></ErrorMsg>
        <FoodItem items={fooditems}></FoodItem>
      </Container>
    </>
  );
}
export default App;
