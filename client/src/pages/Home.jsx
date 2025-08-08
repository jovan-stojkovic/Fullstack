import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            key={key}
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">
              <p>@{value.username}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
