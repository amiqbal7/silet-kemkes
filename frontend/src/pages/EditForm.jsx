import React, { useState } from "react";
import axios from "axios";

const EditForm = () => {
  const [data, setData] = useState({
    id: "1",
    total_peserta_lulus: "",
    peserta_sudah_kembali: "",
    peserta_belum_kembali: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan permintaan HTTP PUT menggunakan Axios
    axios
      .put(`http://localhost:4000/peserta_lulus/${data.id}`, {
        total_peserta_lulus: data.total_peserta_lulus,
        peserta_sudah_kembali: data.peserta_sudah_kembali,
        peserta_belum_kembali: data.peserta_belum_kembali,
      })
      .then((response) => {
        // Tampilkan respons dari server
        console.log(response.data);
        // Reset nilai input form jika berhasil
        setData({
          id: "1",
          total_peserta_lulus: "",
          peserta_sudah_kembali: "",
          peserta_belum_kembali: "",
        });
      })
      .catch((error) => {
        // Tangani kesalahan jika terjadi
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    
      <div className="mb-4">
        <label
          htmlFor="total_peserta_lulus"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Total Peserta Lulus:
        </label>
        <input
          type="text"
          id="total_peserta_lulus"
          name="total_peserta_lulus"
          value={data.total_peserta_lulus}
          onChange={handleChange}
          className="border border-gray-400 rounded py-2 px-3 w-full"
        />
      </div>
    
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Simpan
      </button>
    </form>
  );
};

export default EditForm;
