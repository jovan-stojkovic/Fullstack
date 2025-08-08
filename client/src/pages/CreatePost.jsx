import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter a title").min(3).max(50),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("RADI!!!")
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="title" />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field autoComplete="off" id="inputText" name="postText" />
          <label>UserName:</label>
          <ErrorMessage name="username" component="span" />
          <Field autoComplete="off" id="inputUsername" name="username" />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
