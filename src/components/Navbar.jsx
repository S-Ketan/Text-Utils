import React, { useState } from "react";
import PropTypes from "prop-types";
import Toggle from "react-toggle";

export default function Navbar(props) {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  
 

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Function to enable/disable Dark mode
 
  return (
    <nav className=" p-4 w-full " style={props.myStyle}>
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
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              type="button"
              onClick={props.toggleStyle}
            >
              {props.btnText}
            </button>
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
