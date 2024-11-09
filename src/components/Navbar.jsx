import React, { useState } from "react";
import PropTypes from "prop-types";
import Toggle from "react-toggle";

export default function Navbar(props) {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  /* const toggleStyle = () => {
    if (btnText == "Enable Dark Mode") {
      setMyStyle({
        color: "white",
        backgroundColor: "#3f423f",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  }; */

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleButtonText=()=>{
    if(props.mode === "light"){
      setBtnText("Disable Dark Mode");  
    }
    else{
      setBtnText("Enable Dark Mode");
    }
  }
  // Function to enable/disable Dark mode

  return (
    <nav className="p-4 w-full text-white bg-black" >
      <div className="w-full flex justify-between items-center mx-auto">
        <a className="text-xl font-bold " href="/">
          {props.title}
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          id="navbar-toggler"
          onClick={toggleMenu} // Toggle menu on click
        >
          ☰
        </button>

        {/* Links for Desktop and Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
          id="navbarSupportedContent"
        >
          <ul className="flex space-x-4">
            <li>
              <a
                className="nav-link active  px-3 py-2 rounded"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a className="nav-link  px-3 py-2 rounded" href="/about">
                About
              </a>
            </li>
          </ul>

          {/* Search Form */}
          <form className="flex items-center">
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <label className="inline-flex items-center cursor-pointer max-w-[60%]">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(e) => {
                  props.toggle();
                  toggleButtonText();
                }}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {btnText}
              </span>
            </label>
          </form>
        </div>
      </div>
    </nav>
  );
}

// PropTypes and DefaultProps
Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title here",
};
