import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Update");
  };

  return (
    <div>
      {posts.map((data) => (
        <div key={data.id}>
          <table className="table-fixed border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="border border-slate-600 ">Nama Data</th>
                <th className="border border-slate-600 ">Jumlah</th>
                <th className="border border-slate-600 ">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>Total Peserta Lulus</td>
                <td>{data.total_peserta_lulus}</td>
                <td><button onClick={handleSubmit} className="bg-green-400 px-5 ">Edit</button></td>
              </tr>
              <tr>
                <td className="border border-slate-600 ">Peserta Sudah Kembali</td>
                <td className="border border-slate-600 ">{data.peserta_sudah_kembali}</td>
                <td className="border border-slate-600 ">1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getUpdate } from "../redux/actions/updateActions";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     total_peserta_lulus: "",
//     peserta_sudah_kembali: "",
//     peserta_belum_kembali: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const {
//       total_peserta_lulus,
//       peserta_sudah_kembali,
//       peserta_belum_kembali,
//     } = formData;
//     const id = "your_id"; // Ganti dengan id yang sesuai
//     dispatch(
//       getUpdate(id, {
//         total_peserta_lulus,
//         peserta_sudah_kembali,
//         peserta_belum_kembali,
//       })
//     );
//   };

//   return (
//     <div>
//       <h1>Update Data</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Total Peserta Lulus:</label>
//           <input
//             type="text"
//             name="total_peserta_lulus"
//             value={formData.total_peserta_lulus}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Peserta Sudah Kembali:</label>
//           <input
//             type="text"
//             name="peserta_sudah_kembali"
//             value={formData.peserta_sudah_kembali}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Peserta Belum Kembali:</label>
//           <input
//             type="text"
//             name="peserta_belum_kembali"
//             value={formData.peserta_belum_kembali}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;
