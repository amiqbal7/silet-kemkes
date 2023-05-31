import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import axios from "axios";

const EditForm = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nama_data: "",
    Jumlah: "",
  });

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    const postData = posts.find((data) => data.id === parseInt(id));

    if (postData) {
      setFormData({
        Nama_data: postData.Nama_data,
        Jumlah: "",
      });
    }
  }, [id, posts]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah formData telah diisi
    if (!formData.Jumlah) {
      setError("Jumlah harus diisi");
      return; // Menghentikan eksekusi fungsi handleSubmit
    }

    // Lakukan permintaan HTTP PUT menggunakan Axios
    axios
      .put(`http://localhost:4000/update/${id}`, formData)
      .then((response) => {
        console.log("Post updated successfully:", response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };



  return (
    <div className="mx-auto justify-center grid gap-3 my-48">
      <div className="bg-slate-200 p-5 shadow-md rounded-md w-96">
        {" "}
        <h1 className="font-semibold text-xl">
          Update Data {formData.Nama_data}
        </h1>
        <p className="pt-1">Masukkan sesuai jumlah saat ini</p>
        <hr class="h-px my-2 border-0 bg-slate-300"></hr>
        <form onSubmit={handleSubmit}>
          <div className="pt-3 grid grid-cols-1">
            <label className="font-semibold">Jumlah</label>
            <input
              type="text"
              name="Jumlah"
              value={formData.Jumlah}
              placeholder="Masukkan Jumlah"
              onChange={handleChange}
              className="border border-slate-300 rounded-md pl-1 bg-slate-100"
            />
          </div>
          <button
            type="submit"
            className="grid mx-auto mt-5 w-full bg-sky-800 px-3 py-1 rounded-md text-white"
          >
            Update
          </button>
          {error && <p className="text-red-500 pt-3 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default EditForm;
