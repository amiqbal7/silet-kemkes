import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";

import Dashboard from "./pages/Dashboard";
import EditForm from "./pages/EditForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Update" element={<EditForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
