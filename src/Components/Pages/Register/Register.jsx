import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "Firebase/auth";
const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const { createUser } = useContext(AuthContext);
    // const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    setRegisterError("");
    setSuccess("");

    createUser(email, password)
    .then((result) => {
      setSuccess("User Created Successfully.");
      console.log(result.user);
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("updated");
          Swal.fire({
            title: "Success!",
            text: "Register Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        })
        .catch((error) => {
          console.log(error);
          setRegisterError(error.message);
        });
      navigate(location?.state ? location.state : "/");
      // window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: error
      })   
    });

  };
  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        {/* {registerError && <p className="text-red-700 text-center">{registerError}</p>} */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>
        </p>

        {/* {success ? swal("Login Successfully") : ""} */}
      </div>
    </div>
  );
};

export default Register;
