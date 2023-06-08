import React from "react";
import Data from "./Data";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:mt-[-68px] mt-[-51px] md:mt-[-68px]" name="header">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        className="w-full h-full"
      >
        {Data.heroData.map((item, index) => (
          <SwiperSlide
            className="relative rounded overflow-hidden"
            key={index}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Lapisan overlay */}
            <div className="">
              <img
                src={item.img}
                alt=""
                className="w-full h-[700px] xl:h-[800px] object-cover"
              />
              <div className="text-center">
                <div className="absolute bottom-0 right-0 left-0 flex flex-col xl:py-48 md:py-64 py-36 justify-center mx-5">
                  <h1 className="text-white lg:text-4xl xl:text-5xl truncate capitalize text-2xl font-bold ">
                    {item.title}
                  </h1>
                  <div className="">
                    <div className="pt-[-16px] py-2  lg:text-lg">
                      <div className="">
                        <p className="text-white text-center text-sm lg:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
