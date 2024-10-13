import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputelement = useRef();

  const handleonincrement = () => {
    dispatch(counterActions.increment());
  };
  const handleondecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleonAdd = () => {
    dispatch(counterActions.add(inputelement.current.value));
    inputelement.current.value="";
  };
  const handleonSubs = () => {
    dispatch( counterActions.substract(inputelement.current.value ));
    inputelement.current.value="";
  };
  const handleontoggel=()=>{
  dispatch(privacyActions.toggle())
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
        <button type="button" className="btn btn-warning" onClick={handleontoggel}>
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
