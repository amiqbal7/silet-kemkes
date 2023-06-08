import React from "react";
import logo from "../assets/logo_kemkes.png";
import { BiMap, BiPhone } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLine, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#306480] text-gray-200">
      <div className="grid lg:grid-cols-2 justify-between gap-10 py-10 px-5">
        <img src={logo} className="w-72" />
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-10">
          <div className="grid gap-4">
            <h1 className="text-xl font-semibold">Alamat</h1>
            <div className="flex gap-2">
              {" "}
              <p className="pt-1 text-xl">
                <BiMap />
              </p>
              <p>
                Jl. Hang Jebat III Blok F3, Kebayoran Baru, RT.4/RW.8, Gunung,
                Kby. Baru, Kota Jakarta Selatan 12120
              </p>
            </div>
            <div className="flex gap-2">
              {" "}
              <p className="pt-1 text-xl">
                <BiPhone />{" "}
              </p>
              <p>tim1.ditpennakes@gmail.com</p>
            </div>
            <div className="flex gap-2">
              {" "}
              <p className="text-xl pt-1">
                <AiOutlineMail />
              </p>
              <p>021-7224819, 7224940, 7224876</p>
            </div>
          </div>
          <div className="grid gap-3">
            <h1 className="text-xl font-semibold ">Link Terkait</h1>
            <div className="flex gap-2">
              <p className="pt-1">
                <AiOutlineLine />
              </p>
              <p className="hover:text-blue-500">
                <a href="https://kemkes.go.id/">Kementrian Kesehatan RI</a>
              </p>
            </div>
            <div className="flex gap-2">
              <p className="pt-1">
                <AiOutlineLine />
              </p>
              <p className="hover:text-blue-500">
                {" "}
                <a href="https://ditjen-nakes.kemkes.go.id/">
                  DITJEN Tenaga Kesehatan
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <p className="pt-1">
                <AiOutlineLine />
              </p>
              <p className="hover:text-blue-500">
                {" "}
                <a href="https://kemkes.go.id/">Program PPDS</a>
              </p>
            </div>
            <div className="flex gap-2">
              <p className="pt-1">
                <AiOutlineLine />
              </p>
              <p className="hover:text-blue-500">
                <a href="https://ropeg.kemkes.go.id/osdm/web">
                  Biro Kepegawaian Kemenkes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#6392ab] text-center py-3">
        <div className="md:flex justify-between mx-20">
          <h1>© 2023 Direktorat Jenderal Tenaga Kesehatan Kementerian Kesehatan™. All Rights Reserved</h1>
          <div className="flex gap-2 text-2xl justify-center items-center">
            <p><AiOutlineFacebook /></p>
            <p><AiOutlineInstagram /></p>
            <p><AiOutlineLinkedin /></p>
            <p><AiOutlineTwitter /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
