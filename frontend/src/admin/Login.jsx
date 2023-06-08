import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { BsPersonFill, BsKeyFill } from "react-icons/bs";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickHome = () => {
    navigate("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password, navigate));
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex gap-8 flex-1 p-5 rounded-lg">
        <div className="hidden lg:block bg-[#306480] rounded-lg py-16 w-[50%]">
          <img src={logo} className="w-[400px] mx-auto pt-10" />
          <h1 className="text-3xl font-bold text-white pt-5 text-center">
            KEMENTRIAN KESEHATAN INDONESIA
          </h1>
          <h1 className="text-3xl font-bold text-white pt-5 text-center">
            Sinergi Lintas Sektor
          </h1>
          <p className="text-xl text-white pt-20 mx-5 text-center">
            Pusat Peningkatan Mutu Sumber Daya Manusia Kesehatan Badan PPSDM
            Kesehatan
          </p>
        </div>
        <div className="flex justify-center pt-36 flex-1">
          <div className="w-96 px-5">
            <img
              src={logo}
              alt=""
              className="lg:hidden w-12 p-2 mb-3 border rounded-md border-blue-600"
            />
            <h1 className="md:text-3xl text-2xl font-bold">LOGIN</h1>
            <p className="pb-3 lg:pb-4">Masukkan Username & Password Anda</p>
            <form onSubmit={onSubmit} className="mx-auto">
              <div className="mb-3 lg:mb-5">
                <label>
                  <p>Username</p>
                </label>
                <div className="flex items-center text-2xl bg-slate-200 rounded-lg">
                  <p className="p-2 pt-1.5 m-2 rounded-lg text-slate-600 bg-white">
                    <BsPersonFill />
                  </p>
                  <input
                    id="username"
                    value={username}
                    type="name"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-2 h-10 text-lg mt-0.5 bg-slate-200 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-3 lg:mb-5">
                <label htmlFor="password">
                  <p>Password</p>
                </label>
                <div className = "flex items-center text-2xl bg-slate-200 rounded-lg">
                  {" "}
                  <p className="p-2 pt-1.5 m-2 rounded-lg text-slate-600 bg-white">
                    <BsKeyFill />
                  </p>
                  <input
                    id="password"
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 px-2 rounded-md pl-2 h-10 text-lg bg-slate-200 w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border text-white font-semibold w-full mx-auto py-2 ml-2 mt-3"
              >
                Login
              </button>
              {/* <h1 className="text-red-600 py-3 text-center">{loginStatus}</h1> */}
              <h1 onClick={handleClickHome} className="pt-6 text-center">
                Apakah anda ingin kembali ke{" "}
                <span className="text-blue-600">Home ?</span>
              </h1>
              <div></div>
            </form>
            <h1 className="pt-36 text-gray-500">
              © 2023 Direktorat Jenderal Tenaga Kesehatan Kementerian Kesehatan.
              All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
