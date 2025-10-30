import { useContext } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log("ERROR", err.message));
  };

  const handleGithub = () => {
    loginWithGithub()
    .then((result) => {
      console.log(result.user);
      navigate("/")
    })
    .catch((err) => console.log("ERROR", err.message));
  };

  return (
    <div>
      <h3 className="font-bold mb-3">Login with</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleLoginGoogle}
          className="btn text-sky-300 border-2 border-sky-200"
        >
          <BsGoogle className=""></BsGoogle> Login with Google
        </button>
        
        <button
          onClick={handleGithub}
          className="btn
            border-2 border-gray-400
            "
        >
          <BsGithub></BsGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
