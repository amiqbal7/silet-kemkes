import React, { useState, useEffect } from "react";
import axios from "axios";

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/silet_kemkes");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Data</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Nama_data}</td>
              <td>{item.Jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataComponent;
