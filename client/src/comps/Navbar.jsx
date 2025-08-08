import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/createpost">Create a Post</NavLink>
    </nav>
  );
};

export default Navbar;
