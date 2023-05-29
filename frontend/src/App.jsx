import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./pages/Dashboard";
import EditForm from "./pages/EditForm";
import Navbar from "./components/Navbar";
import Login from "./admin/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/update" element={<EditForm />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
