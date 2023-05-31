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
import Footer from "./components/Footer";
import Test from "./components/Test";
import Protected from "./components/Protected";
import RedirectifProtected from "./components/RedirectifProtected";

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

              <Route path="/update/:id" element={<EditForm />} />
              <Route path="/test" element={<Test />} />
              <Route
                path="/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                path="/login"
                element={
                  <RedirectifProtected>
                    <Login />
                  </RedirectifProtected>
                }
              />
            </Routes>
          </div>
        )}
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
