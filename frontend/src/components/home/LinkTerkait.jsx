import React, { useState } from "react";
import { TbCirclesRelation } from "react-icons/tb";

const LinkTerkait = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="lg:mx-20 mx-5 pb-36">
      <div className="bg-sky-200 text-center py-10 lg:flex rounded-md shadow-lg">
        <h1 className="text-3xl font-semibold text-sky-800 md:mr-16 pb-4">
          Link Terkait
        </h1>
        <div className="w-full lg:mx-auto px-7 justify-items-center grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`gap-4 justify-center bg-sky-50 h-[300px] hover:bg-sky-700 hover:text-white px-4 rounded-lg shadow-lg w-full mx-10 md:mx-0 relative ${
              hoveredIndex === 0 ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="grid justify-center pt-3">
              <p className="text-white my-2 py-3 text-5xl bg-sky-600 w-16  mt-4 pl-2 rounded-lg">
                <TbCirclesRelation />
              </p>
            </div>
            <div>
              <h1 className=" text-sky-800font-semibold text-2xl pt-8">
                Afirmasi
              </h1>
              <p className="">Sinergi Lintas Sektor (SILET)</p>
            </div>
            {hoveredIndex === 0 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`gap-4 bg-cyan-600 h-[300px] px-4 rounded-lg shadow-lg w-full mx-10 md:mx-0 relative ${
              hoveredIndex === 1 ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="grid justify-center pt-3">
            <p className="text-cyan-600 my-2 py-3 text-5xl bg-white w-16  mt-4 pl-2 rounded-lg">
                <TbCirclesRelation />
              </p>
            </div>
            <div>
              <h1 className=" text-white text-2xl pt-8 font-semibold">DLP</h1>
              <p className="text-md">
                Bantuan Pendidikan Spesialis KKLP Program Pendidikan Dokter
                Layanan Primer
              </p>
            </div>
            {hoveredIndex === 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`gap-4 bg-cyan-600 h-[300px] px-4 rounded-lg shadow-lg w-full mx-10 md:mx-0 relative ${
              hoveredIndex === 2 ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="grid justify-center pt-3">
            <p className="text-cyan-600 my-2 py-3 text-5xl bg-white w-16  mt-4 pl-2 rounded-lg">
                <TbCirclesRelation />
              </p>
            </div>
            <div>
              <h1 className=" text-white text-2xl pt-8">SILET</h1>
              <p className="">
                Sinergi Lintas Sektor, Monitoring Peserta PPDS/PPDGS
              </p>
            </div>
            {hoveredIndex === 2 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className={`gap-4 bg-cyan-600 h-[300px] px-4 rounded-lg shadow-lg w-full mx-10 md:mx-0 relative ${
              hoveredIndex === 3 ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="grid justify-center pt-3">
            <p className="text-cyan-600 my-2 py-3 text-5xl bg-white w-16  mt-4 pl-2 rounded-lg">
                <TbCirclesRelation />
              </p>
            </div>
            <div>
              <h1 className=" text-white text-2xl pt-8">PPDS</h1>
              <p className="">Pendaftaran Peserta Bantuan PPDS/PPDGS</p>
            </div>
            {hoveredIndex === 3 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTerkait;
