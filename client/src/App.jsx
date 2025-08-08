import "./Styles.scss";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Link to="/createpost"> Create a Post </Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="createpost" Component={CreatePost} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
