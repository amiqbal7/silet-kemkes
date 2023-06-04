import React, { useState } from "react";
import logo from "../assets/logo_kemkes.png";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscSignOut, VscDashboard } from "react-icons/vsc";
import { logout } from "../redux/reducers/authReducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const handleClose = () => setNav(!nav);
  const [nav, setNav] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  const handlelogout = () => {
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setRotate(!rotate);
    setIsOpen(!isOpen);
  };

  const [rotate, setRotate] = useState(false);

  const selectOption = () => {
    setIsOpen(false);
  };
  const handleClickLogin = () => {
    navigate(`/login`);
    window.location.reload();
  };

  const handleClickHome = () => {
    navigate(`/`);
  };
  const handleClickDashboard = () => {
    navigate(`/dashboard`);
    window.location.reload();
  };

  return (
    <div className="sticky top-0 z-20 bg-[#306480] drop-shadow-lg px-8 py-3">
      <div className="flex justify-between items-center w-full text-white">
        <div className="">
          <img src={logo} className="w-44" onClick={handleClickHome}/>
        </div>
        <div className="lg:text-lg ">
          <ul className="hidden lg:flex font-semibold lg:gap-5">
            <li
              className="hover:text-blue-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-sm before:opacity-0 before:transition-all
            before:duration-500 before:bg-blue-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="header"
                smooth={true}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Home
              </Link>
            </li>
            <li
              className="hover:text-blue-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-blue-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="Tentang"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Tentang
              </Link>
            </li>
            <li
              className="hover:text-blue-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-blue-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="LinkTerkait"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Link Terkait
              </Link>
            </li>
            <li
              className="hover:text-blue-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-blue-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="PesertaAktif"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Peserta
              </Link>
            </li>

          </ul>
        </div>
        <div className="hidden lg:flex ">
          {isLoggedIn ? (
            <ul className="flex gap-0 pt-2">
              <h1>
                Welcome, {user && user.username ? user.username : "Guest"}
              </h1>
              <div className="relative">
                <button
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${
                    rotate ? "rotate-180" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-sky-500 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 right-0 text-center">
                    <button
                      className="flex gap-2"
                      onClick={() => selectOption(handlelogout())}
                    >
                      <p className="pt-1 text-xl">
                        <VscSignOut />
                      </p>
                      <p>Log Out</p>
                    </button>
                    <button
                      className="flex gap-2"
                      onClick={() => selectOption(handleClickDashboard())}
                    >
                      <p className="pt-1 text-xl">
                        <VscDashboard />
                      </p>
                      <p>Dashboard</p>
                    </button>
                  </div>
                )}
              </div>
            </ul>
          ) : (
            <ul className="flex gap-3">
              <button
                className="bg-white text-cyan-700 rounded-sm font-bold px-4 py-1"
                onClick={() => handleClickLogin()}
              >
                login
              </button>
            </ul>
          )}
        </div>

        <div className="lg:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : " bg-transparent w-full text-center text-gray-900 px-8"}>
        <li className="border-b-2 border-zinc-300 w-full hover:text-gray-300 py-1">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-gray-300 py-1" >
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
        <li className="border-b-2 border-zinc-300 w-full hover:text-gray-300 py-1">
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
        <li className="border-b-2 border-zinc-300 w-full hover:text-gray-300 py-1">
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

        <li className="border-b-2 border-zinc-300 w-full hover:text-gray-300 py-1">
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
          <button onClick={handleClickLogin} className="bg-gray-100 font-semibold text-sky-700 border-[#202de5] px-8 py-3 mb-4">
            Sign In
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
