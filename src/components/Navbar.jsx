import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleButtonText = () => {
    if (props.mode === "light") {
      setBtnText("Disable Dark Mode");
    } else {
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <nav className="p-4 w-full text-white bg-black">
      <div className="w-full flex justify-between items-center mx-auto">
        <a className="text-xl font-bold" href="/">
          {props.title}
        </a>

        <button
          className="md:hidden p-2 text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          id="navbar-toggler"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 w-full md:w-auto`}
          id="navbarSupportedContent"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
            <li className="w-full md:w-auto">
              <Link
                className="nav-link active px-3 py-2 rounded block md:inline-block"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                className="nav-link px-3 py-2 rounded block md:inline-block"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <form className="flex items-center mt-4 md:mt-0 w-full md:w-auto ">
           {/*  <input
              className="border border-gray-300 rounded-lg py-2 px-4 mr-2 w-full md:w-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
 */}
            <label className="inline-flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => {
                  props.toggle();
                  toggleButtonText();
                }}
              />
              <div className="relative w-[70px] h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-5 text-base font-medium text-gray-900 dark:text-gray-300 w-full inline-block" style={{ minWidth: "150px" }}>
                {btnText}
              </span>
            </label>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title here",
};
