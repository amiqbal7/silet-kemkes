import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";

const Total = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [animatedNumbers, setAnimatedNumbers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);


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

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts) {
      const numbers = posts.slice(0, 6).map((data) => data.Jumlah);
      setAnimatedNumbers(numbers);
    }
  }, [posts]);

  const getBackgroundColor = (index) => {
    const pastelColors = [
      "#6096B4",
      "#93BFCF",
      "#74ae99",
      "#ce9b9b",
      "#EDC6B1",
    ];
    const colorIndex = index % pastelColors.length;
    return pastelColors[colorIndex];
  };

  return (
    <div
      data-aos="fade-up"
      className={`lg:mx-16 mt-16 mb-32  mx-5 ${
        isVisible ? "animate-appear" : ""
      }`}
      name="Total"
      ref={targetRef}
    >
      <div className="grid xl:grid-cols-6 sm:grid-cols-2 gap-3 ">
        {animatedNumbers.map((number, index) => (
          <div key={index}>
            <div className="">
              <div
                className={`gap-4 pt-4 justify-center h-64 px-5 rounded-lg shadow-lg`}
                style={{ backgroundColor: getBackgroundColor(index) }}
              >
                <div className="">
                  <p
                    className="text-cyan-600 pt-2 text-3xl bg-white w-12 h-12 mt-2 pl-2 rounded-lg"
                    style={{ color: getBackgroundColor(index) }}
                  >
                    <FaUsers />
                  </p>
                </div>
                <div>
                  <h1 className="text-white text-2xl pt-12">
                    {posts && posts[index].Nama_data}
                  </h1>
                  <p className="font-bold text-white text-5xl">
                    {isVisible ? <CountUp end={number} duration={4} /> : number}
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
