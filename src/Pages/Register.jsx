import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more the 5 character" });
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        
        if(!result.user.email){
          setError('Pease verify')
        }
        else{
          setUser(user);
           updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log("ERROR", err));
        }

        verifyEmail()
          .then(() => {
            console.log("Verification email sent!");
          })
          .catch((err) => console.log(err));

       
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 py-10 rounded-none">
        <h2 className="text-center text-2xl font-semibold">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo-URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error.name && <p className="text-red-500">{error.name}</p>}
          <div className="form-control mt-6 flex-col">
            <button className="btn  btn-neutral rounded-none w-full">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
