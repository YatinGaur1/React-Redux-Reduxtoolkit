import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputelement = useRef();

  const handleonincrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleondecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleonAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputelement.current.value } });
    inputelement.current.value="";
  };
  const handleonSubs = () => {
    dispatch({ type: "SUB", payload: { num: inputelement.current.value } });
    inputelement.current.value="";
  };
  const handleontoggel=()=>{
  dispatch({type:"TOGGLE"})
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="mx1pfs"
          onClick={handleonincrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4 btn-info"
          fdprocessedid="gkvbcx"
          onClick={handleondecrement}
        >
          -1
        </button>
        <button type="button" class="btn btn-warning" onClick={handleontoggel}>
          Privacy toggle
        </button>
      </div>

      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ marginTop: "10px" }}
      >
        <input type="text" placeholder="Enter add number " ref={inputelement} />
        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4 btn-info"
          fdprocessedid="gkvbcx"
          onClick={handleonAdd}
        >
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleonSubs}>
          Substract
        </button>
      </div>
    </>
  );
};
export default Controls;
