import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/Update')
    }


  return (
    <div>
      <h1>Edit data 1 </h1>
      <button onClick={handleSubmit} className="bg-red-700">Edit</button>
    </div>
  );
};

export default Dashboard;
