import HeadName from "./Heading.jsx";
import ErrorMsg from "./ErrorMessage.jsx";
import FoodItem from "./Fooditem.jsx";
import Container from "./Container.jsx";
import FoodInput from "./FoodInput.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  //let fooditems=[]
  let fooditems = ["Dal", "green vegetables", "Rice", "Milk", "Salad", "sabzi"];
  // firstway to declare usestate
  // let textStateArr=useState("food item Enter here");
  // let textToShow=textStateArr[0];
  // let setTextToShow=textStateArr[1];
  
  //second method to used usestate by the help of destructed the array
  let [textToShow,setTextToShow]=useState("food item Enter here")


  const handleOnchange = (event) => {
    console.log(event.target.value);
    setTextToShow( event.target.value);
  };
  return (
    <>
      <Container>
        <HeadName></HeadName>
        <ErrorMsg items={fooditems}></ErrorMsg>
        <FoodInput handleOnchange={handleOnchange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItem items={fooditems}></FoodItem>
      </Container>

      {/* <Container>
        <p>this is food list which is benefically for your health</p>
      </Container> */}
    </>
  );
}
export default App;
