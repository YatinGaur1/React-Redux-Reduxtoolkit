import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";
import Headername from "./HeaderName";
import Slogen from "./Slogen";
import CurrentTime from "./CurrentTime";

function App() {
  return(
    <center>
    <Headername></Headername>
    <Slogen></Slogen>
    <CurrentTime></CurrentTime>
    </center>
    

  )
}
export default App;
