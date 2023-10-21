import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          uid: result.user?.uid,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        // update last logged at in the database
        fetch(
          "http://localhost:5000/users",
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          title: "Success!",
          text: "Login Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error,
        });
      });
  };
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Login Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const email = result.user?.email;
        const createdAt = result.user?.metadata?.creationTime;
        const lastLoggedAt = result.user?.metadata?.lastSignInTime;
        const uid = result.user?.uid;
        const user = {
          email : email,
          createdAt : createdAt,
          lastLoggedAt : lastLoggedAt,
          uid : uid,
        };
        fetch(
          "http://localhost:5000/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error,
        });
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
        <p className="text-center my-2">
          <button onClick={handleGoogleLogin} className="btn btn-primary">
            Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
