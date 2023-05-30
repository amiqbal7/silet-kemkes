import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import { FaUsers } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const PesertaAktif = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const getBackgroundColor = (index) => {
    const pastelColors = [
      "#6096B4",
      "#93BFCF",
      "#74ae99",
      "#ce9b9b",
      "#EDC6B1",
    ]; // Contoh warna pastel yang berbeda-beda
    const colorIndex = index % pastelColors.length;
    return pastelColors[colorIndex];
  };

  return (
    <div className="lg:mx-16 mx-5">
      <h1 className="m-5 text-center text-xl font-semibold">Peserta Aktif</h1>
      <div className="grid xl:grid-cols-5 sm:grid-cols-2 gap-3 ">
        {posts?.slice(7, 17).map((data, index) => (
          <div key={data.id}>
            <div className="">
              <div
                className={`gap-4 pt-4 justify-center h-60 px-5 rounded-lg shadow-lg`}
                style={{ backgroundColor: getBackgroundColor(index) }}
              >
                <div className="">
                  <p className="text-cyan-600 pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className="text-white text-2xl pt-12">
                    {data.Nama_data}
                  </h1>
                  <p className="font-bold text-white text-5xl ">
                    {data.Jumlah}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PesertaAktif;
