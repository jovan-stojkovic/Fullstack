import "./Styles.scss";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Navbar from "./comps/Navbar";
import Post from "./pages/Post";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" Component={CreatePost} />
          <Route path="/post/:id" Component={Post} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
