import React, { useState, useEffect } from "react";
import axios from "axios";

const Coba = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan HTTP GET menggunakan Axios
    axios
      .get("http://localhost:4000/silet_kemkes")
      .then((response) => {
        // Mengupdate state dataList dengan data dari server
        setDataList(response.data);
      })
      .catch((error) => {
        // Tangani kesalahan jika terjadi
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      {dataList.length > 0 ? (
        <ul>
          {dataList.map((data) => (
            <li key={data.id}>
              <p>Data 1: {data.total_peserta_lulus}</p>
              <p>Data 2: {data.peserta_sudah_kembali}</p>
              <p>Data 3: {data.peserta_belum_kembali}</p>
              <p>Data 4: {data.peserta_pindah}</p>
              <p>Data 5: {data.peserta_status_kosong}</p>
              <p>Data 6: {data.total_peserta_aktif}</p>
              <p>
                Data 6:{" "}
                {Number(data.total_peserta_aktif) + Number(data.peserta_pindah)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Coba;
