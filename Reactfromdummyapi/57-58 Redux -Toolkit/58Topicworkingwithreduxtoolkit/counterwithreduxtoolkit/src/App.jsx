import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Display from "./component/Display";
import Container from "./component/Container";
import Controls from "./component/Controls";
import { useSelector } from "react-redux";
import Privacy from "./component/privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <Privacy /> : <Display />}
          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
