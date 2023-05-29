import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import { FaUsers } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const Total = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);



  return (
    <div className="lg:mx-16">
      <div className="pt-5">
        {posts.map((data) => (
          <div key={data.id}>
            <div className="w-full lg:mx-auto px-7 justify-center justify-items-center grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
              <div className=" gap-4 justify-center bg-cyan-600 h-52 px-4 rounded-lg shadow-lg w-full mx-36">
                <div className="">
                  <p className="text-cyan-600 pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className=" text-white text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-white text-3xl ">
                    {data.total_peserta_lulus}
                  </p>
                </div>
              </div>
              <div className=" gap-4 justify-center bg-[#74ae99] h-52 px-4 rounded-lg shadow-lg w-full mx-5">
                <div className="">
                  <p className="text-[#74ae99] pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-3xl ">
                    {" "}
                    {data.total_peserta_lulus}
                  </p>
                </div>
              </div>
              <div className=" gap-4 justify-center bg-[#e1ceac] h-52 px-4 rounded-lg shadow-lg w-full">
                <div className="">
                  <p className="text-[#cbb68e] pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-3xl ">
                    {data.total_peserta_lulus}
                  </p>
                </div>
              </div>
              <div className=" gap-4 justify-center bg-[#ce9b9b] h-52 px-4 rounded-lg shadow-lg w-full ">
                <div className="">
                  <p className="text-[#ce9b9b] pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className=" text-white text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-white text-3xl ">
                    {data.total_peserta_lulus}
                  </p>
                </div>
              </div>
              <div className=" gap-4 justify-center bg-cyan-600 h-52 px-4 rounded-lg shadow-lg w-full">
                <div className="">
                  <p className="text-cyan-600 pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className=" text-white text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-white text-3xl ">
                    {data.total_peserta_lulus}
                  </p>
                </div>
              </div>
              <div className=" gap-4 justify-center bg-[#ce9b9b] h-52 px-4 rounded-lg shadow-lg w-full">
                <div className="">
                  <p className="text-[#ce9b9b] pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg">
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className=" text-white text-2xl pt-16">Total Peserta</h1>
                  <p className="font-bold text-white text-3xl ">
                    {data.total_peserta_lulus}
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

export default Total;
