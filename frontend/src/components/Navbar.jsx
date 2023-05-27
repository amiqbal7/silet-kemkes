import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(`/login`);
  };

  const handleClickHome = () => {
    navigate(`/`);
  };

  return (
    <div
      className="sticky top-0 z-20 bg-gray-100 justify-between drop-shadow-lg px-16 py-3"
    >
      <div

        className="flex justify-between items-center w-full"
      >
        <div  className="w-20">
          <h1>kemenkes</h1>
        </div>
        <div className="lg:text-lg ">
          <ul className="hidden md:flex font-bold gap-3 md:gap-0">
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Home
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickHome()}
              >
                About
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Support
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="event"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Event
              </Link>
            </li>

            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="Location"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className="px-4 py-2 h-11 bg-[#007936]"
            onClick={() => handleClickLogin()}
          >
            LogIn
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <AiOutlineMenu className="w-5" /> : <AiOutlineClose className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : " bg-gray-100 w-full px-8 "}>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="Event"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Event
          </Link>
        </li>

        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="Faq"
            smooth={true}
            offset={-100}
            duration={500}
          >
            FAQ
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-[#007936] border-[#007936] px-8 py-3 mb-4">
            Sign In
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;