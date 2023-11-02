import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { authContext } from "../Context_Provider/Provider";

const Login = () => {
  const { logInUser } = useContext(authContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    logInUser(email, password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="">
      <Navbar></Navbar>
      {/* Register section */}
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl pb-5 font-bold">Login your account !</h1>
            <hr />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your E-mail"
                  className="input input-bordered"
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
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <p>
                  New Here? please
                  <Link to={"/register"}>
                    <span className="font-bold"> Register</span>
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary normal-case">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
