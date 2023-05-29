import axios from "axios";
import { setUser, setToken, setIsLoggedIn } from "../reducers/authReducers";
import { toast } from "react-toastify";

export const login = (username, password, navigate) => async (dispatch) => {
  try {
    const data = {
      username: username,
      password: password,
    };

    const response = await axios.post("http://localhost:4000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { token, user } = response.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(setUser(user));

    // Redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error?.response?.data?.message)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};
