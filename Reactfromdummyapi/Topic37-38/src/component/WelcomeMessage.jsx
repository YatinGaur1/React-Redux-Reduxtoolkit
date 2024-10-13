const WelcomeMessage = ({Getpostonclick}) => {
  return (
    <center className="hero-section">
      <h2>There is no post yet.</h2>
      <button type="button" className="btn btn-warning" onClick={Getpostonclick}>
        Get post from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
