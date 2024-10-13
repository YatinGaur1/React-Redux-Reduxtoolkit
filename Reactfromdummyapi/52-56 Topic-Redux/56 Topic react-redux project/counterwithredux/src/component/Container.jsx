const Container = ({children}) => {
  return (
    <div className="card" style={{width: "70%",textAlign:"center"}}>
      <div className="card-body">
       {children}
      </div>
    </div>
  );
};
export default Container;
