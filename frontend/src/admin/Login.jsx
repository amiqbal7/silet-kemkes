import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png"

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
    <div className="pt-36 grid justify-center mx-auto">
      <div className="flex gap-8">
        <div className="hidden lg:block">
          <img src={logo} class="h-96" />
        </div>
        <div className="mx-auto grid justify-items-center ">
          <div className="">
            <h1 className="md:text-5xl text-2xl font-bold">
              LOGIN 
            </h1>
            <p className="pb-5 lg:pb-7">
              Get started for best watch film experience with NETPLIG
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
                  className="mt-1 ml-2 w-64 rounded-md pl-2 h-10 text-lg bg-transparent border border-slate-500"
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
                  className="mt-1 ml-2 w-64 rounded-md pl-2 h-10 text-lg bg-transparent border border-slate-500"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-600 w-64 mx-auto py-2 ml-2 mt-3"
              >
                Sign In
              </button>
              {/* <h1 className="text-red-600 py-3 text-center">{loginStatus}</h1> */}
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
