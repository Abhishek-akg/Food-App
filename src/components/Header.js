import { LOGO_URL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../Utils/userContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState(["Login"]);
  //console.log("Header rendered");
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-200 shadow-lg sm:bg-gray-200 lg:bg-pink-50">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Online Status {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 text-lg">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
