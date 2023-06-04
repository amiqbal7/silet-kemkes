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
            className="linear-bg relative rounded overflow-hidden"
            key={index}
          >
            <div className="">
              <img
                src={item.img}
                alt="movie"
                className="w-full h-[700px] xl:h-[800px] object-cover"
              />
              <div className="">
                <div className="absolute bottom-0 right-0 left-0 flex flex-col xl:py-48 md:py-64 py-36 justify-center mx-5">
                  <h1 className="text-white lg:text-4xl xl:text-5xl truncate capitalize font-sans sm:text-2xl text-lg font-bold ">
                    {item.title}
                  </h1>
                  <div className="flex-MovieItem">
                    <div className="flex gap-2 pt-[-16px] py-2 font-semibold lg:text-lg">
                      <div className="flex">
                        <p className="text-white text-xs lg:text-lg">
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
