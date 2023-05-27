import React, { useState } from 'react';
import axios from 'axios';

const EditForm = () => {
  const [data, setData] = useState({
    id: '',
    data1: '',
    data2: '',
    data3: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan permintaan HTTP PUT menggunakan Axios
    axios.put(`http://localhost:4000/data1/${data.id}`, {
      data1: data.data1,
      data2: data.data2,
      data3: data.data3
    })
      .then(response => {
        // Tampilkan respons dari server
        console.log(response.data);
        // Reset nilai input form jika berhasil
        setData({
          id: '',
          data1: '',
          data2: '',
          data3: ''
        });
      })
      .catch(error => {
        // Tangani kesalahan jika terjadi
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={data.id}
          onChange={handleChange}
          className="border border-gray-400 rounded py-2 px-3 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="data1" className="block text-gray-700 text-sm font-bold mb-2">Data 1:</label>
        <input
          type="text"
          id="data1"
          name="data1"
          value={data.data1}
          onChange={handleChange}
          className="border border-gray-400 rounded py-2 px-3 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="data2" className="block text-gray-700 text-sm font-bold mb-2">Data 2:</label>
        <input
          type="text"
          id="data2"
          name="data2"
          value={data.data2}
          onChange={handleChange}
          className="border border-gray-400 rounded py-2 px-3 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="data3" className="block text-gray-700 text-sm font-bold mb-2">Data 3:</label>
        <input
          type="text"
          id="data3"
          name="data3"
          value={data.data3}
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
