// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"
const Navbar = () => {
      return (
            <div className="flex justify-between items-center">
                  <div className=""></div>
                  <div className="flex justify-center items-center gap-4">
                  <button to="/">Home</button>
                  <button to="/career">Career</button>
                  <button to="/about">About</button>
                  </div>
                  <div className="flex justify-center items-center gap-6">
                  <div>
                        <img src={userIcon} alt="" />
                  </div>
                  <div>
                        <NavLink to="/auth/login"  className="btn btn-neutral">Login</NavLink>
                  </div>
                  </div>
            </div>
      );
};

export default Navbar;