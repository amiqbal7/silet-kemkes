import { useEffect, useHistory } from "react";
import { getPosts } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleSubmit = (id) => {
    navigate(`/update/${id}`);
  };

  const getBackgroundColor = (index) => {
    const bgColor = [
      "#00000",
      "#DDE6ED",
    ];
    const colorIndex = index % bgColor.length;
    return bgColor[colorIndex];
  };


  return (
    <div className="grid md:mx-auto mx-5 justify-center my-16">
      <table className="table-fixed border-collapse border border-gray-500">
        <thead>
          <tr className="bg-sky-200">
            <th className="border border-gray-600 py-2 px-4">ID</th>
            <th className="border border-gray-600 py-2 px-4">Nama Data</th>
            <th className="border border-gray-600 py-2 px-4">Jumlah</th>
            <th className="border border-gray-600 py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((data, index) => (
            <tr
              key={data.id}
              style={{ backgroundColor: getBackgroundColor(index) }}
            >
              <td className="border border-gray-600 py-2 px-4">{data.id}</td>
              <td className="border border-gray-600 py-2 px-4">
                {data.Nama_data}
              </td>
              <td className="border border-gray-600 py-2 px-4">
                {data.Jumlah}
              </td>
              <td className="border border-gray-600 py-2 px-4">
                <button
                  onClick={() => handleSubmit(data.id)}
                  className="bg-green-600 px-5 py-2 text-white rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
