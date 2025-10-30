import { useContext } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FindUs = () => {
  const {loginWithTwitter} = useContext(AuthContext)
  
    const navigate = useNavigate();
  
    const handleLoginTwitter = () => {
      loginWithTwitter()
        .then((result) => {
          console.log(result.user);
          navigate("/");
        })
        .catch((err) => console.log("ERROR", err.message));
    };
  return (
    <div className="py-8">
      <h3 className="font-bold mb-4">Find Us On</h3>
      <div className="flex join-vertical">
        <button className="btn join-item justify-start ">
          <FaFacebook className="text-blue-600"></FaFacebook> Facebook
        </button>
        <button onClick={handleLoginTwitter} className="btn join-item justify-start">
          <FaTwitter className="text-sky-500"></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-red-400"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
