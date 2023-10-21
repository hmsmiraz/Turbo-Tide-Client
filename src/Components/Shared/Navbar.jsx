import { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Providers/AuthProviders";
// import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Log out Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addBrand">Add Brand</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/Cart">Cart</NavLink>
      </li>
    </>
  );

  return (
    <div data-aos="fade-down" className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="w-10 rounded-full">
          <Link to={"/"}>
            <img src="/logo.svg" />
          </Link>
        </div>
        <Link to={"/"}>
          <button className="btn btn-ghost normal-case text-xl">
            Turbo Tide
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center justify-center">
          {/* for dark mode */}
        {/* <div>
          {user ? (
            <button>
              <BsMoonFill
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
              ></BsMoonFill>
            </button>
          ) : (
            <button>
              <BsFillSunFill
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
              ></BsFillSunFill>
            </button>
          )}
        </div> */}
          <div>
            {user ? (
              <p className="font-light text-xs w-10 lg:w-20">
                {user.displayName}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-5 lg:w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
