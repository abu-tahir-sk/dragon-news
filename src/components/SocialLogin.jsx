import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-bold mb-3">Login with</h3>
      <div className="flex flex-col gap-2">
            <button className="btn text-sky-300 border-2 border-sky-200"><BsGoogle className=""></BsGoogle> Login with Google</button>
            <button className="btn
            border-2 border-gray-400
            "><BsGithub></BsGithub> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
