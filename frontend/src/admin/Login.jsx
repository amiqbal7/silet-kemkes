import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password, navigate));
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex gap-8 flex-1">
        <div className="hidden lg:block bg-sky-300 py-16 w-[50%]">
          <img src={logo} className="w-[400px] mx-auto pt-10" />
          <h1 className="text-3xl font-bold text-white pt-5 text-center">
            KEMENTRIAN KESEHATAN INDONESIA
          </h1>
        </div>
        <div className="flex justify-center pt-36 flex-1">
          <div className="w-96">
            <h1 className="md:text-5xl text-2xl font-bold">LOGIN</h1>
            <p className="pb-5 lg:pb-7">
            Masukkan Username & Password Anda
            </p>
            <form onSubmit={onSubmit} className="mx-auto">
              <div className="mb-3 lg:mb-7">
                <label>
                  <p>Email</p>
                </label>
                <input
                  id="username"
                  value={username}
                  type="name"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 ml-2 rounded-md pl-2 h-10 text-lg bg-slate-200 w-full"
                />
              </div>

              <div className="mb-3 lg:mb-7">
                <label htmlFor="password">
                  <p>Password</p>
                </label>
                <input
                  id="password"
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 ml-2 rounded-md pl-2 h-10 text-lg bg-slate-200 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white w-full mx-auto py-2 ml-2 mt-3"
              >
                Sign In
              </button>
              {/* <h1 className="text-red-600 py-3 text-center">{loginStatus}</h1> */}
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
