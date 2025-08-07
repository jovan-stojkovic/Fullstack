import "./Styles.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return <>
  {listOfPosts.map((value, key) => {
    return <div> {value.title} </div>
  })}
  </>;
};

export default App;
