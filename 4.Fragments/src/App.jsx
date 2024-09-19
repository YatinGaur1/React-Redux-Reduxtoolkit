
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

//function App() { understanding of fragment
// return (
//   <>
//     <div className="fw-bolder">Healthy food</div>
//     <ul class="list-group">
//       <li class="list-group-item">Dal</li>
//       <li class="list-group-item">Green Vegetables</li>
//       <li class="list-group-item">Roti</li>
//       <li class="list-group-item">Salad</li>
//       <li class="list-group-item">Milk</li>
//     </ul>
//   </>
// );
//}

function App() {
  //let fooditems=[];
  let fooditems = ["Dal", "green vegetables", "salad", "rice", "Rote"];

  //we  can conditional rendering here it is also if need.

  return (
    <>
      <div className="fw-bolder">Healthy food</div>
      {fooditems.length===0 && <h3>I am still hangry</h3>}
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
