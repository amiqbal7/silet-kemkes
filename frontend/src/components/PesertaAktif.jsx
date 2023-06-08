import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const PesertaAktif = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [animatedNumbers, setAnimatedNumbers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts) {
      const idList = [2, 7, 8, 9, 10, 11, 3, 4, 5, 6];
      const filteredPosts = idList.map((id) => posts.find((data) => data.id === id));
      const numbers = filteredPosts.map((data) => data?.Jumlah || 0);
      setAnimatedNumbers(numbers);
    }
  }, [posts]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const getBackgroundColor = (index) => {
    const bgColor = [
      "#6096B4",
      "#93BFCF",
      "#74ae99",
      "#ce9b9b",
      "#EDC6B1",
      "#EDC6B1",
    ];
    const colorIndex = index % bgColor.length;
    return bgColor[colorIndex];
  };

  return (
    <div
      ref={targetRef}
      data-aos="fade-up"
      className={`lg:mx-16 pb-40 pt-16 mx-5 ${isVisible ? "animate-appear" : ""}`}
      name="PesertaAktif"
    >
      <h1 className="m-5 text-center text-3xl font-bold">Peserta Aktif dan Peserta Lulus</h1>
      <div className="grid xl:grid-cols-5 sm:grid-cols-2 gap-3 ">
        {animatedNumbers.map((number, index) => {
          const postData = posts.find((data) => data.id === [2, 7, 8, 9, 10, 11, 3, 4, 5, 6][index]);
          if (!postData) return null; // Skip rendering if post data doesn't exist
          return (
            <div key={index}>
              <div className="">
                <div
                  className={`gap-4 pt-4 justify-center h-60 px-5 rounded-lg shadow-lg`}
                  style={{ backgroundColor: getBackgroundColor(index) }}
                >
                  <div className="">
                    <p className="text-cyan-600 pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg"
                    style={{ color: getBackgroundColor(index) }}
                    >
                      <FaUsers />
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white text-2xl pt-12">{postData.Nama_data}</h1>
                    <p className="font-bold text-white text-5xl">
                      {isVisible ? <CountUp end={number} duration={4} /> : number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PesertaAktif;
