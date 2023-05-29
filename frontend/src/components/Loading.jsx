import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center">
        <PuffLoader size={100} color="#36d7b7" loading={true} />
      </div>
    </div>
  );
};

export default Loading;

