import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import CreatePost from "./Createpost";
import PostList from "./PostList";
import { useState } from "react";
import PostListProvider from "../store/Post-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div id="app-container">
        <SideBar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
           <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
