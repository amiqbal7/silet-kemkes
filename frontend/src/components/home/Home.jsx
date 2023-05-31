import React from "react";
import Header from "./Header";
import Total from "../Total";
import Coba from "../../pages/coba";
import Tentang from "../Tentang";
import LinkTerkait from "./LinkTerkait";
import PesertaAktif from "../PesertaAktif";
import Peserta from "../Peserta";

const Home = () => {
  return (
    <>
      <Header />
      <Total />
      <Tentang />
      <LinkTerkait />
      <PesertaAktif />
      <Peserta />
      

    </>
  );
};

export default Home;
