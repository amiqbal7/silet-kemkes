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

export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    const response = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/api/v1/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = response?.data;
    dispatch(setUser(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      if (error.response.status === 401) {
        dispatch(logout());
      }
      return;
    }

    toast.error(error.message);
  }
};