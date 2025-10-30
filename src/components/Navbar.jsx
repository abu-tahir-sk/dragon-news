// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.name}</div>
      <div className="flex justify-center items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <button to="/career">Career</button>
        <button to="/about">About</button>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <div>
          {user && user ? (
            <button className="btn btn-neutral" onClick={logOut}>Log-Out</button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-neutral">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
