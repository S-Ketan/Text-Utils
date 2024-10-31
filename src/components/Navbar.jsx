import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full ">
      {/* Replace container with w-full */}
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Navbar Title */}
        <a className="text-xl font-bold text-white" href="/">
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4`} id="navbarSupportedContent">
          <ul className="flex space-x-4">
            <li>
              <a
                className="nav-link active text-white hover:bg-gray-200 px-3 py-2 rounded"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link text-white hover:bg-gray-200 px-3 py-2 rounded"
                href="/about"
              >
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
              type="submit"
            >
              Enable Dark Mode
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
  title: 'Set Title here',
};
