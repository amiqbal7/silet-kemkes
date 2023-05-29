import React from "react";
import dokter from "../assets/dokter.jpg";

const Tentang = () => {
  return (
    <div className="bg-sky-200 my-64 pb-8">
      <div className="flex gap-24 pt-10 lg:max-w-7xl lg:mx-auto mx-5">
        <div className="relative w-full hidden lg:block mt-[-80px]">
          <img src={dokter} />
        </div>
        <div className="text-center lg:text-start lg:">
          <h1 className="pb-5 text-sky-600 text-xl font-semibold">Tentang kami</h1>
          <h2 className="font-semibold text-sky-950 text-3xl pb-3 ">
            Program Pemberian Bantuan Biaya Pendidikan Dokter Spesialis Dan
            Dokter Gigi Spesialis
          </h2>
          <p>
            Kementerian Kesehatan RI melalui Badan Pengembangan dan Pemberdayaan
            SDM Kesehatan c.q Pusat Peningkatan Mutu SDM Kesehatan (Puskat Mutu
            SDMK) melakukan upaya pengembangan dan peningkatan kualitas dan
            kuantitas SDM Kesehatan, melalui Program Bantuan Pendidikan Dokter
            Spesialis-Subspesialis dan Dokter Gigi Spesialis-Subspesialis.
            Program bantuan Pendidikan Dokter Spesialis-Subspesialis dan Dokter
            Gigi Spesialis-Subspesialis yang dilaksanakan dalam rangka memenuhi
            kebutuhan pelayanan kesehatan spesialistik di seluruh wilayah
            Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
