import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy:false,
};
const countReducer = (store = INITIAL_VALUE, action) => {
  //store is also immutable
  let new_store = store;
  if (action.type === "INCREMENT") {
    new_store = { ...store,counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    new_store = { ...store,counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    new_store = { ...store,counter: store.counter + Number(action.payload.num) };
  }else if(action.type==="SUB"){
    new_store={...store,counter:store.counter-Number(action.payload.num)};
  }else if(action.type==="TOGGLE"){
    new_store={...store,privacy:!store.privacy}
  }
  return new_store;
};

const Counterstore = createStore(countReducer);

export default Counterstore;
